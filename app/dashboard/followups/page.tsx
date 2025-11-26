"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Loader2, CalendarIcon, Plus, Trash2, FileText } from "lucide-react"
import { FormField } from "@/components/ui/field"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/components/auth-provider"
import { usersApi, followupsApi } from "@/lib/api"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

function toLocalDateTime(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0")
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

export default function FollowupsPage() {
  const { user } = useAuth()
  const { toast } = useToast()

  const [followups, setFollowups] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    userId: "",                 // menteeId
    topic: "",                  // mapeia para title
    notes: "",                  // mapeia para mentorNotes
    followupDate: new Date(),   // mapeia para scheduledDate
    nextFollowupDate: undefined as Date | undefined, // mapeia para actualDate (opcional)
  })

  const isAdmin = user?.role === "ADMIN"

  useEffect(() => {
    fetchFollowups()
    if (isAdmin) fetchUsers()
  }, [isAdmin])

  const fetchFollowups = async () => {
    try {
      // O controller expõe getAccessible() e my-meetings(). Para listar geral, use accessible.
      const data = await followupsApi.getAccessible()
      setFollowups(data)
    } catch {
      toast({ title: "Erro ao carregar acompanhamentos", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const fetchUsers = async () => {
    try {
      const data = await usersApi.getAll()
      setUsers(data)
    } catch {
      toast({ title: "Erro ao carregar usuários", variant: "destructive" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const menteeId = Number(formData.userId)
    if (!menteeId) {
      toast({ title: "Selecione um usuário", variant: "destructive" })
      return
    }

    const dto = {
      menteeId,
      title: formData.topic,
      scheduledDate: toLocalDateTime(formData.followupDate),
      actualDate: formData.nextFollowupDate ? toLocalDateTime(formData.nextFollowupDate) : null,

      // defaults/opcionais (alinhados ao seu controller/entidade)
      status: "SCHEDULED",
      meetingType: "PRESENTIAL",
      content: null,
      objectives: null,
      discussionPoints: null,
      commitments: null,
      nextSteps: null,
      mentorNotes: formData.notes || null,
      visibility: "PRIVATE",
      sharedWithUserIds: [],
      sharedRoleIds: [],
    }

    try {
      await followupsApi.create(dto)
      toast({ title: "Acompanhamento criado com sucesso" })
      setDialogOpen(false)
      resetForm()
      fetchFollowups()
    } catch {
      toast({ title: "Erro ao criar acompanhamento", variant: "destructive" })
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir este acompanhamento?")) return
    try {
      await followupsApi.delete(id)
      toast({ title: "Acompanhamento excluído com sucesso" })
      fetchFollowups()
    } catch {
      toast({ title: "Erro ao excluir acompanhamento", variant: "destructive" })
    }
  }

  const resetForm = () => {
    setFormData({
      userId: "",
      topic: "",
      notes: "",
      followupDate: new Date(),
      nextFollowupDate: undefined,
    })
  }

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {isAdmin ? "Gestão de Acompanhamentos" : "Meus Acompanhamentos"}
          </h1>
          <p className="text-muted-foreground">
            {isAdmin
              ? "Gerencie os acompanhamentos formativos dos membros"
              : "Acompanhe seus registros e acompanhamentos realizados"}
          </p>
        </div>

        {isAdmin && (
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="mr-2 h-4 w-4" />
                Novo Acompanhamento
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Novo Acompanhamento</DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-6">
                <FormField label="Usuário (mentorado)" htmlFor="userId" required>
                  <Select
                    value={formData.userId}
                    onValueChange={(value) => setFormData({ ...formData, userId: value })}
                  >
                    <SelectTrigger id="userId">
                      <SelectValue placeholder="Selecione um usuário" />
                    </SelectTrigger>
                    <SelectContent>
                      {users.map((u) => (
                        <SelectItem key={u.id} value={u.id.toString()}>
                          {u.name} ({u.username})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormField>

                <FormField label="Tema do Acompanhamento" htmlFor="topic" required>
                  <Input
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    placeholder="Ex: Caminho vocacional"
                  />
                </FormField>

                <FormField label="Observações" htmlFor="notes">
                  <Input
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Anotações sobre o acompanhamento"
                  />
                </FormField>

                <FormField label="Data do Acompanhamento" htmlFor="followupDateBtn">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="followupDateBtn"
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-transparent"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.followupDate
                          ? format(formData.followupDate, "PPP", { locale: ptBR })
                          : "Selecione uma data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.followupDate}
                        onSelect={(date) => date && setFormData({ ...formData, followupDate: date })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormField>

                <FormField label="Data Realizada (Opcional)" htmlFor="nextFollowupBtn">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="nextFollowupBtn"
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-transparent"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.nextFollowupDate
                          ? format(formData.nextFollowupDate, "PPP", { locale: ptBR })
                          : "Selecione uma data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.nextFollowupDate}
                        onSelect={(date) => setFormData({ ...formData, nextFollowupDate: date || undefined })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormField>

                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit">Salvar</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* LISTAGEM */}
      {followups.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-muted-foreground">
              Nenhum acompanhamento {isAdmin ? "cadastrado" : "encontrado"}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {followups.map((f) => (
            <Card key={f.id}>
              <CardHeader>
                <CardTitle>{f.title || "Acompanhamento"}</CardTitle>
                <CardDescription>{f.mentorNotes || f.content || "Sem observações."}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground space-y-1">
                  {isAdmin && f.menteeName && (
                    <p>
                      Usuário: <span className="font-medium">{f.menteeName}</span>
                    </p>
                  )}
                  <p>
                    Agendado:{" "}
                    {f.scheduledDate
                      ? new Date(f.scheduledDate).toLocaleString("pt-BR")
                      : "N/A"}
                  </p>
                  {f.actualDate && (
                    <p>Realizado: {new Date(f.actualDate).toLocaleString("pt-BR")}</p>
                  )}
                </div>
                {isAdmin && (
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(f.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
