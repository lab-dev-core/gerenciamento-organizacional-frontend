"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Loader2, Pencil, Trash2, FolderTree, ChevronRight } from "lucide-react"
import { categoriesApi } from "@/lib/api"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"

export default function CategoriesPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<any>(null)
  const [formData, setFormData] = useState({ name: "", description: "", parentId: null })
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set())

  const isAdmin = user?.role === "ADMIN"

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const data = await categoriesApi.getRoot()
      setCategories(data)
    } catch (error) {
      toast({ title: "Erro ao carregar categorias", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingCategory) {
        await categoriesApi.update(editingCategory.id, formData)
        toast({ title: "Categoria atualizada com sucesso" })
      } else {
        await categoriesApi.create(formData)
        toast({ title: "Categoria criada com sucesso" })
      }
      setDialogOpen(false)
      setEditingCategory(null)
      setFormData({ name: "", description: "", parentId: null })
      fetchCategories()
    } catch (error) {
      toast({ title: "Erro ao salvar categoria", variant: "destructive" })
    }
  }

  const handleEdit = (category: any) => {
    setEditingCategory(category)
    setFormData({
      name: category.name,
      description: category.description || "",
      parentId: category.parentId,
    })
    setDialogOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir esta categoria?")) return
    try {
      await categoriesApi.delete(id)
      toast({ title: "Categoria excluída com sucesso" })
      fetchCategories()
    } catch (error) {
      toast({ title: "Erro ao excluir categoria", variant: "destructive" })
    }
  }

  const toggleExpand = (id: number) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedCategories(newExpanded)
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

  const CategoryItem = ({ category, level = 0 }: { category: any; level?: number }) => {
    const hasChildren = category.subcategories && category.subcategories.length > 0
    const isExpanded = expandedCategories.has(category.id)

    return (
      <div>
        <div
          className="flex items-center justify-between rounded-lg p-3 hover:bg-accent"
          style={{ paddingLeft: `${level * 1.5 + 0.75}rem` }}
        >
          <div className="flex items-center gap-2">
            {hasChildren && (
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => toggleExpand(category.id)}>
                <ChevronRight className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
              </Button>
            )}
            <FolderTree className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-medium">{category.name}</p>
              {category.description && <p className="text-xs text-muted-foreground">{category.description}</p>}
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={() => handleEdit(category)}>
              <Pencil className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => handleDelete(category.id)}>
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        </div>
        {isExpanded && hasChildren && (
          <div>
            {category.subcategories.map((sub: any) => (
              <CategoryItem key={sub.id} category={sub} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestão de Categorias</h1>
          <p className="text-muted-foreground">Organize os documentos em categorias e subcategorias</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditingCategory(null)
                setFormData({ name: "", description: "", parentId: null })
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Nova Categoria
            </Button>
          </DialogTrigger>

          {/* mesmo container da tela de usuários */}
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingCategory ? "Editar Categoria" : "Nova Categoria"}</DialogTitle>
            </DialogHeader>

            {/* respiro vertical entre blocos */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Bloco: informações básicas */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="block mb-2">
                    Nome da Categoria
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Documentos Oficiais"
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
                    placeholder="Descreva o propósito desta categoria"
                    rows={3}
                  />
                </div>
              </div>

              {/* (Opcional) Pai da categoria — se quiser expor agora */}
              {/* 
              <div>
                <Label htmlFor="parentId" className="block mb-2">
                  Categoria Pai
                </Label>
                <Select
                  value={formData.parentId?.toString() ?? "none"}
                  onValueChange={(v) =>
                    setFormData({ ...formData, parentId: v === "none" ? null : Number(v) })
                  }
                >
                  <SelectTrigger id="parentId">
                    <SelectValue placeholder="Sem categoria pai" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Nenhuma</SelectItem>
                    {categories.map((c) => (
                      <SelectItem key={c.id} value={c.id.toString()}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              */}

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
        <CardContent className="p-4">
          {categories.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <FolderTree className="mb-4 h-12 w-12 text-muted-foreground" />
              <p className="text-muted-foreground">Nenhuma categoria encontrada</p>
            </div>
          ) : (
            <div className="space-y-2">
              {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
