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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Loader2, Pencil, Trash2, MapPin, Users } from "lucide-react"
import { locationsApi, usersApi } from "@/lib/api"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"

export default function LocationsPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [locations, setLocations] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingLocation, setEditingLocation] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    city: "",
    state: "",
    country: "Brasil",
    address: "",
    postalCode: "",
    coordinatorId: null as number | null,
  })

  const isAdmin = user?.role === "ADMIN" || user?.role === "COORDINATOR"

  useEffect(() => {
    fetchLocations()
    fetchUsers()
  }, [])

  const fetchLocations = async () => {
    try {
      const data = await locationsApi.getAll()
      setLocations(data)
    } catch (error) {
      toast({ title: "Erro ao carregar locais", variant: "destructive" })
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingLocation) {
        await locationsApi.update(editingLocation.id, formData)
        toast({ title: "Local atualizado com sucesso" })
      } else {
        await locationsApi.create(formData)
        toast({ title: "Local criado com sucesso" })
      }
      setDialogOpen(false)
      setEditingLocation(null)
      setFormData({
        name: "",
        description: "",
        city: "",
        state: "",
        country: "Brasil",
        address: "",
        postalCode: "",
        coordinatorId: null,
      })
      fetchLocations()
    } catch (error) {
      toast({ title: "Erro ao salvar local", variant: "destructive" })
    }
  }

  const handleEdit = (location: any) => {
    setEditingLocation(location)
    setFormData({
      name: location.name,
      description: location.description || "",
      city: location.city || "",
      state: location.state || "",
      country: location.country || "Brasil",
      address: location.address || "",
      postalCode: location.postalCode || "",
      coordinatorId: location.coordinator?.id || null,
    })
    setDialogOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir este local?")) return
    try {
      await locationsApi.delete(id)
      toast({ title: "Local excluído com sucesso" })
      fetchLocations()
    } catch (error) {
      toast({ title: "Erro ao excluir local", variant: "destructive" })
    }
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
          <h1 className="text-3xl font-bold tracking-tight">Gestão de Locais</h1>
          <p className="text-muted-foreground">Gerencie os locais de missão e recantos</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditingLocation(null)
                setFormData({
                  name: "",
                  description: "",
                  city: "",
                  state: "",
                  country: "Brasil",
                  address: "",
                  postalCode: "",
                  coordinatorId: null,
                })
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Novo Local
            </Button>
          </DialogTrigger>

          {/* container igual ao da tela de usuários */}
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingLocation ? "Editar Local" : "Novo Local"}</DialogTitle>
            </DialogHeader>

            {/* espaçamento vertical consistente */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome e descrição */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="block mb-2">
                    Nome do Local
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Recanto São Francisco"
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
                    placeholder="Descreva este local de missão"
                    rows={3}
                  />
                </div>
              </div>

              {/* Endereço */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address" className="block mb-2">
                    Endereço
                  </Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Rua, Número, Bairro"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city" className="block mb-2">
                      Cidade
                    </Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="São Paulo"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="block mb-2">
                      Estado
                    </Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="SP"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="country" className="block mb-2">
                      País
                    </Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="Brasil"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode" className="block mb-2">
                      CEP
                    </Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      placeholder="00000-000"
                    />
                  </div>
                </div>
              </div>

              {/* Coordenador */}
              <div className="space-y-2">
                <Label htmlFor="coordinator" className="block mb-2">
                  Coordenador
                </Label>
                <Select
                  value={formData.coordinatorId?.toString() || "none"}
                  onValueChange={(value) =>
                    setFormData({ ...formData, coordinatorId: value === "none" ? null : Number(value) })
                  }
                >
                  <SelectTrigger id="coordinator">
                    <SelectValue placeholder="Selecione um coordenador" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Nenhum</SelectItem>
                    {users.map((user) => (
                      <SelectItem key={user.id} value={user.id.toString()}>
                        {user.name} ({user.username})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                <TableHead>Endereço Completo</TableHead>
                <TableHead>Coordenador</TableHead>
                <TableHead>Membros</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {locations.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    Nenhum local encontrado
                  </TableCell>
                </TableRow>
              ) : (
                locations.map((location) => (
                  <TableRow key={location.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {location.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {location.address && <div>{location.address}</div>}
                        <div>
                          {location.city} - {location.state}
                          {location.postalCode && ` (${location.postalCode})`}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{location.coordinator?.name || "Sem coordenador"}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{location.userCount || 0}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(location)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(location.id)}>
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
