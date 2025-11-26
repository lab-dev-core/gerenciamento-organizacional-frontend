"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Loader2, Pencil, Trash2, User } from "lucide-react"
import { usersApi, rolesApi, locationsApi } from "@/lib/api"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"
import { FormField } from "@/components/ui/field"

export default function UsersPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [users, setUsers] = useState<any[]>([])
  const [roles, setRoles] = useState<any[]>([])
  const [locations, setLocations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<any>(null)
  const [formData, setFormData] = useState({
  name: "",
  username: "",
  password: "",
  roleId: "",             
  missionLocationId: "",
  lifeStage: "",
  city: "",
  state: "",
  age: "",
  phone: "",
  education: "",
  mentorId: "",
  communityYears: "",
  communityMonths: "",
  isEnabled: true,
})

  const isAdmin = user?.role === "ADMIN"

  const lifeStages = [
    { value: "MISSION_ASSISTANT", label: "Auxiliar de Missão" },
    { value: "VOCATIONAL", label: "Vocacionado" },
    { value: "ASPIRANCY", label: "Aspirante" },
    { value: "DISCIPLESHIP", label: "Discipleship" },
    { value: "DISCIPLESHIP_IN_MISSION", label: "Discípulo em Missão" },
    { value: "CONSECRATED_PERMANENT", label: "Consagrado permanente" },
  ]

  useEffect(() => {
    if (!isAdmin) return
    fetchData()
  }, [isAdmin])

  const fetchData = async () => {
    try {
      const [usersData, rolesData, locationsData] = await Promise.all([
        usersApi.getAll(),
        rolesApi.getAll(),
        locationsApi.getAll(),
      ])
      setUsers(usersData)
      setRoles(rolesData)
      setLocations(locationsData)
    } catch (error) {
      toast({ title: "Erro ao carregar dados", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const userData = {
        ...formData,
        roleId: formData.roleId ? Number.parseInt(formData.roleId) : null,
        missionLocationId: formData.missionLocationId ? Number.parseInt(formData.missionLocationId) : null,
        mentorId: formData.mentorId ? Number.parseInt(formData.mentorId) : null,
        age: formData.age ? Number.parseInt(formData.age) : null,
        communityYears: formData.communityYears ? Number.parseInt(formData.communityYears) : null,
        communityMonths: formData.communityMonths ? Number.parseInt(formData.communityMonths) : null,
      }

      if (editingUser) {
        await usersApi.update(editingUser.id, userData)
        toast({ title: "Usuário atualizado com sucesso" })
      } else {
        await usersApi.create(userData)
        toast({ title: "Usuário criado com sucesso" })
      }
      setDialogOpen(false)
      setEditingUser(null)
      resetForm()
      fetchData()
    } catch (error) {
      toast({ title: "Erro ao salvar usuário", variant: "destructive" })
    }
  }

  const handleEdit = (u: any) => {
    setEditingUser(u)
    setFormData({
      name: u.name || "",
      username: u.username || "",
      password: "",
      roleId: (u.role?.id ?? u.roleId)?.toString() || "",
      missionLocationId: (u.missionLocation?.id ?? u.missionLocationId)?.toString() || "",
      lifeStage: u.lifeStage || "",
      city: u.city || "",
      state: u.state || "",
      age: u.age?.toString() || "",
      phone: u.phone || "",
      education: u.education || "",
      mentorId: (u.mentor?.id ?? u.mentorId)?.toString() || "",
      communityYears: u.communityYears?.toString() || "",
      communityMonths: u.communityMonths?.toString() || "",
      isEnabled: u.isEnabled ?? true,
    })
      setDialogOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir este usuário?")) return
    try {
      await usersApi.delete(id)
      toast({ title: "Usuário excluído com sucesso" })
      fetchData()
    } catch (error) {
      toast({ title: "Erro ao excluir usuário", variant: "destructive" })
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      username: "",
      password: "",
      roleId: "",
      missionLocationId: "",
      lifeStage: "",
      city: "",
      state: "",
      age: "",
      phone: "",
      education: "",
      mentorId: "",
      communityYears: "",
      communityMonths: "",
      isEnabled: true,
    })
  }

  if (!isAdmin) {
    return (
      <div className="flex h-full items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground">Você não tem permissão para acessar esta página.</p>
          </CardContent>
        </Card>
      </div>
    )
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
          <h1 className="text-3xl font-bold tracking-tight">Gestão de Usuários</h1>
          <p className="text-muted-foreground">Gerencie os membros da comunidade</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditingUser(null)
                resetForm()
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Novo Usuário
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingUser ? "Editar Usuário" : "Novo Usuário"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informações Básicas */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4">Informações Básicas</h3>

                <div className="grid grid-cols-2 gap-4">
                  <FormField label="Nome Completo" htmlFor="name" required>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="João da Silva"
                    />
                  </FormField>

                  <FormField label="Nome de Usuário" htmlFor="username" required>
                    <Input
                      id="username"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      placeholder="joao.silva"
                    />
                  </FormField>
                </div>

                <FormField label={`Senha ${editingUser ? "(deixe em branco para manter)" : ""}`} htmlFor="password">
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    required={!editingUser}
                  />
                </FormField>
              </div>

              {/* Contato e Localização */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4">Contato e Localização</h3>

                <div className="grid grid-cols-3 gap-4">
                  <FormField label="Idade" htmlFor="age">
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder="25"
                    />
                  </FormField>

                  <FormField label="Telefone" htmlFor="phone" className="col-span-2">
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 98765-4321"
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField label="Cidade" htmlFor="city" required>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="São Paulo"
                    />
                  </FormField>

                  <FormField label="Estado" htmlFor="state" required>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="SP"
                    />
                  </FormField>
                </div>

                <FormField label="Escolaridade" htmlFor="education">
                  <Input
                    id="education"
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    placeholder="Ensino Superior Completo"
                  />
                </FormField>
              </div>

              {/* Informações da Comunidade */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4">Informações da Comunidade</h3>

                <div className="grid grid-cols-2 gap-4">
                  <FormField label="Papel" htmlFor="roleId">
                    <Select
                      value={formData.roleId}
                      onValueChange={(value) => setFormData({ ...formData, roleId: value })}
                    >
                      <SelectTrigger id="roleId">
                        <SelectValue placeholder="Selecione um papel" />
                      </SelectTrigger>
                      <SelectContent>
                        {roles.map((role) => (
                          <SelectItem key={role.id} value={role.id.toString()}>
                            {role.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>

                  <FormField label="Local de Missão" htmlFor="missionLocationId">
                    <Select
                      value={formData.missionLocationId}
                      onValueChange={(value) =>
                        setFormData({ ...formData, missionLocationId: value === "none" ? "" : value })
                      }
                    >
                      <SelectTrigger id="missionLocationId">
                        <SelectValue placeholder="Selecione um local" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Nenhum</SelectItem>
                        {locations.map((location) => (
                          <SelectItem key={location.id} value={location.id.toString()}>
                            {location.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField label="Etapa Formativa" htmlFor="lifeStage">
                    <Select
                      value={formData.lifeStage}
                      onValueChange={(value) => setFormData({ ...formData, lifeStage: value })}
                    >
                      <SelectTrigger id="lifeStage">
                        <SelectValue placeholder="Selecione uma etapa" />
                      </SelectTrigger>
                      <SelectContent>
                        {lifeStages.map((stage) => (
                          <SelectItem key={stage.value} value={stage.value}>
                            {stage.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>

                  <FormField label="Mentor" htmlFor="mentorId">
                    <Select
                      value={formData.mentorId}
                      onValueChange={(value) => setFormData({ ...formData, mentorId: value })}
                    >
                      <SelectTrigger id="mentorId">
                        <SelectValue placeholder="Selecione um mentor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Nenhum</SelectItem>
                        {users.map((u) => (
                          <SelectItem key={u.id} value={u.id.toString()}>
                            {u.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField label="Anos na Comunidade" htmlFor="communityYears" required>
                    <Input
                      id="communityYears"
                      type="number"
                      value={formData.communityYears}
                      onChange={(e) => setFormData({ ...formData, communityYears: e.target.value })}
                      placeholder="2"
                    />
                  </FormField>

                  <FormField label="Meses na Comunidade" htmlFor="communityMonths">
                    <Input
                      id="communityMonths"
                      type="number"
                      value={formData.communityMonths}
                      onChange={(e) => setFormData({ ...formData, communityMonths: e.target.value })}
                      placeholder="6"
                    />
                  </FormField>
                </div>
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>

          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Usuário</TableHead>
                <TableHead>Papel</TableHead>
                <TableHead>Etapa</TableHead>
                <TableHead>Local</TableHead>
                <TableHead>Tempo</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground">
                    Nenhum usuário encontrado
                  </TableCell>
                </TableRow>
              ) : (
                users.map((u) => (
                  <TableRow key={u.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        {u.name}
                      </div>
                    </TableCell>
                    <TableCell>{u.username}</TableCell>
            
                    <TableCell className="text-sm">{u.roleName || "N/A"}</TableCell>
                    <TableCell className="text-sm">{u.lifeStage || "N/A"}</TableCell>
                    <TableCell className="text-sm">{u.missionLocationName || "N/A"}</TableCell>
                    <TableCell className="text-sm">
                      {u.communityYears || u.communityMonths ? (
                        <span>
                          {u.communityYears ? `${u.communityYears}a` : ""}
                          {u.communityMonths ? ` ${u.communityMonths}m` : ""}
                        </span>
                      ) : (
                        "N/A"
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(u)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(u.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
