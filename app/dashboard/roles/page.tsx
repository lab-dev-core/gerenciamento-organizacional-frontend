"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Plus, Loader2, Pencil, Trash2, Shield } from "lucide-react"
import { rolesApi } from "@/lib/api"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"

export default function RolesPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [roles, setRoles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingRole, setEditingRole] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    canManageUsers: false,
    canManageRoles: false,
    canManageStages: false,
    canManageDocuments: false,
  })

  const isAdmin = user?.role === "ADMIN"

  useEffect(() => {
    fetchRoles()
  }, [])

  const fetchRoles = async () => {
    try {
      const data = await rolesApi.getAll()
      setRoles(data)
    } catch (error) {
      toast({ title: "Erro ao carregar papéis", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingRole) {
        await rolesApi.update(editingRole.id, formData)
        toast({ title: "Papel atualizado com sucesso" })
      } else {
        await rolesApi.create(formData)
        toast({ title: "Papel criado com sucesso" })
      }
      setDialogOpen(false)
      setEditingRole(null)
      setFormData({
        name: "",
        description: "",
        canManageUsers: false,
        canManageRoles: false,
        canManageStages: false,
        canManageDocuments: false,
      })
      fetchRoles()
    } catch (error) {
      toast({ title: "Erro ao salvar papel", variant: "destructive" })
    }
  }

  const handleEdit = (role: any) => {
    setEditingRole(role)
    setFormData({
      name: role.name,
      description: role.description || "",
      canManageUsers: role.canManageUsers || false,
      canManageRoles: role.canManageRoles || false,
      canManageStages: role.canManageStages || false,
      canManageDocuments: role.canManageDocuments || false,
    })
    setDialogOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir este papel?")) return
    try {
      await rolesApi.delete(id)
      toast({ title: "Papel excluído com sucesso" })
      fetchRoles()
    } catch (error) {
      toast({ title: "Erro ao excluir papel", variant: "destructive" })
    }
  }

  const countPermissions = (role: any) => {
    return [role.canManageUsers, role.canManageRoles, role.canManageStages, role.canManageDocuments].filter(Boolean)
      .length
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
          <h1 className="text-3xl font-bold tracking-tight">Gestão de Papéis</h1>
          <p className="text-muted-foreground">Configure os papéis e permissões do sistema</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditingRole(null)
                setFormData({
                  name: "",
                  description: "",
                  canManageUsers: false,
                  canManageRoles: false,
                  canManageStages: false,
                  canManageDocuments: false,
                })
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Novo Papel
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingRole ? "Editar Papel" : "Novo Papel"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block mb-2">
                  Nome do Papel
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Coordenador"
                  required
                />
              </div>
              <div>
                <Label htmlFor="description" className="block mb-2">
                  Descrição
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Descreva as responsabilidades deste papel"
                  rows={3}
                />
              </div>
              <div className="space-y-4">
                <Label className="block mb-2">Permissões</Label>
                <div className="space-y-3 rounded-lg border p-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="canManageUsers"
                      checked={formData.canManageUsers}
                      onCheckedChange={(checked) => setFormData({ ...formData, canManageUsers: checked as boolean })}
                    />
                    <label
                      htmlFor="canManageUsers"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Gerenciar Usuários
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="canManageRoles"
                      checked={formData.canManageRoles}
                      onCheckedChange={(checked) => setFormData({ ...formData, canManageRoles: checked as boolean })}
                    />
                    <label
                      htmlFor="canManageRoles"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Gerenciar Papéis
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="canManageStages"
                      checked={formData.canManageStages}
                      onCheckedChange={(checked) => setFormData({ ...formData, canManageStages: checked as boolean })}
                    />
                    <label
                      htmlFor="canManageStages"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Gerenciar Etapas Formativas
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="canManageDocuments"
                      checked={formData.canManageDocuments}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, canManageDocuments: checked as boolean })
                      }
                    />
                    <label
                      htmlFor="canManageDocuments"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Gerenciar Documentos
                    </label>
                  </div>
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
                <TableHead>Descrição</TableHead>
                <TableHead>Permissões</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground">
                    Nenhum papel encontrado
                  </TableCell>
                </TableRow>
              ) : (
                roles.map((role) => (
                  <TableRow key={role.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        {role.name}
                      </div>
                    </TableCell>
                    <TableCell>{role.description || "Sem descrição"}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {role.canManageUsers && (
                          <Badge variant="secondary" className="text-xs">
                            Usuários
                          </Badge>
                        )}
                        {role.canManageRoles && (
                          <Badge variant="secondary" className="text-xs">
                            Papéis
                          </Badge>
                        )}
                        {role.canManageStages && (
                          <Badge variant="secondary" className="text-xs">
                            Etapas
                          </Badge>
                        )}
                        {role.canManageDocuments && (
                          <Badge variant="secondary" className="text-xs">
                            Documentos
                          </Badge>
                        )}
                        {countPermissions(role) === 0 && (
                          <span className="text-xs text-muted-foreground">Sem permissões</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(role)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(role.id)}>
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
