"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Loader2, CheckCircle2, Clock, Plus, CalendarIcon, Trash2 } from "lucide-react"
import { stagesApi, usersApi } from "@/lib/api"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export default function StagesPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [stages, setStages] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    startDate: new Date(),
    endDate: undefined as Date | undefined,
  })

  const isAdmin = user?.role === "ADMIN"

  useEffect(() => {
    fetchStages()
    if (isAdmin) {
      fetchUsers()
    }
  }, [isAdmin])

  const fetchStages = async () => {
    try {
      const data = isAdmin ? await stagesApi.getAll() : await stagesApi.getActive()
      setStages(data)
    } catch (error) {
      toast({ title: "Erro ao carregar etapas", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const fetchUsers = async () => {
    try {
      const data = await usersApi.getAll()
      setUsers(data)
    } catch (error) {
      console.error("Erro ao carregar usuários")
    }
  }

  const handleComplete = async (id: number) => {
    if (!confirm("Tem certeza que deseja marcar esta etapa como concluída?")) return
    try {
      await stagesApi.complete(id)
      toast({ title: "Etapa concluída com sucesso" })
      fetchStages()
    } catch (error) {
      toast({ title: "Erro ao concluir etapa", variant: "destructive" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const stageData = {
        name: formData.name,
        startDate: format(formData.startDate, "yyyy-MM-dd"),
        endDate: formData.endDate ? format(formData.endDate, "yyyy-MM-dd") : null,
      }
      await stagesApi.create(Number.parseInt(formData.userId), stageData)
      toast({ title: "Etapa criada com sucesso" })
      setDialogOpen(false)
      resetForm()
      fetchStages()
    } catch (error) {
      toast({ title: "Erro ao criar etapa", variant: "destructive" })
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir esta etapa?")) return
    try {
      await stagesApi.delete(id)
      toast({ title: "Etapa excluída com sucesso" })
      fetchStages()
    } catch (error) {
      toast({ title: "Erro ao excluir etapa", variant: "destructive" })
    }
  }

  const resetForm = () => {
    setFormData({
      userId: "",
      name: "",
      startDate: new Date(),
      endDate: undefined,
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
            {isAdmin ? "Gestão de Etapas Formativas" : "Minhas Etapas Formativas"}
          </h1>
          <p className="text-muted-foreground">
            {isAdmin ? "Gerencie as etapas formativas dos usuários" : "Acompanhe seu progresso nas etapas de formação"}
          </p>
        </div>
        {isAdmin && (
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="mr-2 h-4 w-4" />
                Nova Etapa
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Nova Etapa Formativa</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="userId">Usuário</Label>
                  <Select
                    value={formData.userId}
                    onValueChange={(value) => setFormData({ ...formData, userId: value })}
                  >
                    <SelectTrigger>
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
                </div>

                <div>
                  <Label htmlFor="name">Nome da Etapa</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Discipulado Inicial"
                    required
                  />
                </div>

                <div>
                  <Label>Data de Início</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.startDate
                          ? format(formData.startDate, "PPP", { locale: ptBR })
                          : "Selecione uma data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.startDate}
                        onSelect={(date) => date && setFormData({ ...formData, startDate: date })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label>Data de Término (Opcional)</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.endDate ? format(formData.endDate, "PPP", { locale: ptBR }) : "Selecione uma data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.endDate}
                        onSelect={(date) => setFormData({ ...formData, endDate: date })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit">Criar</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {stages.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Clock className="mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-muted-foreground">Nenhuma etapa {isAdmin ? "cadastrada" : "ativa no momento"}</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {stages.map((stage) => (
            <Card key={stage.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">{stage.name || "Etapa"}</h3>
                      {stage.endDate ? (
                        <Badge variant="default" className="bg-green-600">
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          Concluída
                        </Badge>
                      ) : (
                        <Badge variant="secondary">
                          <Clock className="mr-1 h-3 w-3" />
                          Em Andamento
                        </Badge>
                      )}
                    </div>
                    {isAdmin && stage.user && (
                      <p className="text-sm text-muted-foreground">
                        Usuário: <span className="font-medium">{stage.user.name}</span>
                      </p>
                    )}
                    <div className="text-sm text-muted-foreground">
                      <p>Início: {stage.startDate ? new Date(stage.startDate).toLocaleDateString("pt-BR") : "N/A"}</p>
                      {stage.endDate && <p>Término: {new Date(stage.endDate).toLocaleDateString("pt-BR")}</p>}
                      {stage.durationMonths && <p>Duração: {stage.durationMonths} meses</p>}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!stage.endDate && (
                      <Button onClick={() => handleComplete(stage.id)} variant="outline" size="sm">
                        Marcar como Concluída
                      </Button>
                    )}
                    {isAdmin && (
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(stage.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
