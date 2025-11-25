"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, FileText, Loader2, Pencil, Trash2, Eye, Upload, Download, File, X } from "lucide-react"
import { documentsApi, locationsApi, rolesApi } from "@/lib/api"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function DocumentsPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const uploadInputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({})
  
  const [documents, setDocuments] = useState<any[]>([])
  const [locations, setLocations] = useState<any[]>([])
  const [roles, setRoles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [uploadingId, setUploadingId] = useState<number | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingDoc, setEditingDoc] = useState<any>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadFiles, setUploadFiles] = useState<{ [key: number]: File | null }>({})
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    documentType: "",
    accessLevel: "",
    keywords: "",
  })

  const isAdmin = user?.role === "ADMIN"

  const documentTypes = [
    { value: "PERSONAL", label: "Documento Pessoal" },
    { value: "STAGE_SPECIFIC", label: "Específico por Etapa" },
    { value: "LOCATION_SPECIFIC", label: "Específico por Local" },
    { value: "GENERAL", label: "Geral da Comunidade" },
  ]

  const accessLevels = [
    { value: "PRIVATE", label: "Privado - Apenas Autor" },
    { value: "RESTRICTED", label: "Restrito - Usuários Específicos" },
    { value: "STAGE_BASED", label: "Por Etapa" },
    { value: "LOCATION_BASED", label: "Por Localização" },
    { value: "PUBLIC", label: "Público - Todos" },
  ]

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [docs, locs, rls] = await Promise.all([
        documentsApi.getAccessible(),
        locationsApi.getAll(),
        rolesApi.getAll(),
      ])
      setDocuments(docs)
      setLocations(locs)
      setRoles(rls)
    } catch (error) {
      console.error("[v0] Error fetching data:", error)
      toast({ title: "Erro ao carregar documentos", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  // Handler para arquivo no formulário de criação/edição
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      
      // Validar tamanho (máximo 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({ title: "Arquivo muito grande! Tamanho máximo: 10MB", variant: "destructive" })
        return
      }
      
      setSelectedFile(file)
    }
  }

  // Handler para upload em documentos existentes
  const handleUploadFileChange = (docId: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      
      if (file.size > 10 * 1024 * 1024) {
        toast({ title: "Arquivo muito grande! Tamanho máximo: 10MB", variant: "destructive" })
        return
      }
      
      setUploadFiles({ ...uploadFiles, [docId]: file })
    }
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      let savedDoc
      if (editingDoc) {
        savedDoc = await documentsApi.update(editingDoc.id, formData)
        toast({ title: "Documento atualizado com sucesso" })
      } else {
        savedDoc = await documentsApi.create(formData)
        toast({ title: "Documento criado com sucesso" })
      }

      // Se tem arquivo selecionado, fazer upload
      if (selectedFile && savedDoc?.id) {
        await documentsApi.uploadFile(savedDoc.id, selectedFile)
        toast({ title: "Arquivo enviado com sucesso!" })
      }

      setDialogOpen(false)
      setEditingDoc(null)
      setSelectedFile(null)
      resetForm()
      fetchData()
    } catch (error) {
      toast({ title: "Erro ao salvar documento", variant: "destructive" })
    }
  }

  const handleEdit = (doc: any) => {
    setEditingDoc(doc)
    setFormData({
      title: doc.title || "",
      content: doc.content || "",
      documentType: doc.documentType || "",
      accessLevel: doc.accessLevel || "",
      keywords: doc.keywords || "",
    })
    setDialogOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir este documento?")) return
    try {
      await documentsApi.delete(id)
      toast({ title: "Documento excluído com sucesso" })
      fetchData()
    } catch (error) {
      toast({ title: "Erro ao excluir documento", variant: "destructive" })
    }
  }

  const handleDownload = async (doc: any) => {
    try {
      await documentsApi.downloadFile(doc.id, doc.fileName)
      toast({ title: "Download iniciado!" })
    } catch (error) {
      toast({ title: "Erro ao baixar arquivo", variant: "destructive" })
    }
  }

  const handleUploadToExisting = async (docId: number) => {
    const file = uploadFiles[docId]
    
    if (!file) {
      toast({ title: "Selecione um arquivo primeiro", variant: "destructive" })
      return
    }

    try {
      setUploadingId(docId)
      await documentsApi.uploadFile(docId, file)
      toast({ title: "Arquivo enviado com sucesso!" })
      
      // Limpar o arquivo selecionado
      setUploadFiles({ ...uploadFiles, [docId]: null })
      if (uploadInputRefs.current[docId]) {
        uploadInputRefs.current[docId]!.value = ""
      }
      
      fetchData()
    } catch (error) {
      toast({ title: "Erro ao enviar arquivo", variant: "destructive" })
    } finally {
      setUploadingId(null)
    }
  }

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      documentType: "",
      accessLevel: "",
      keywords: "",
    })
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const getAccessBadgeColor = (accessLevel: string) => {
    switch (accessLevel) {
      case "PUBLIC":
        return "default"
      case "PRIVATE":
        return "destructive"
      case "RESTRICTED":
        return "secondary"
      default:
        return "outline"
    }
  }

  const formatFileSize = (bytes: number) => {
    if (!bytes) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const getFileIcon = (fileType: string) => {
    if (fileType?.includes('pdf')) return '📄'
    if (fileType?.includes('word') || fileType?.includes('document')) return '📝'
    if (fileType?.includes('sheet') || fileType?.includes('excel')) return '📊'
    return '📎'
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
          <h1 className="text-3xl font-bold tracking-tight">Documentos Formativos</h1>
          <p className="text-muted-foreground">Gerencie e acesse os documentos da comunidade</p>
        </div>
        {isAdmin && (
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={() => {
                  setEditingDoc(null)
                  resetForm()
                }}
              >
                <Plus className="mr-2 h-4 w-4" />
                Novo Documento
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingDoc ? "Editar Documento" : "Novo Documento"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Título</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Título do documento"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="content">Conteúdo</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Conteúdo do documento formativo..."
                    rows={8}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="documentType">Tipo de Documento</Label>
                    <Select
                      value={formData.documentType}
                      onValueChange={(value) => setFormData({ ...formData, documentType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        {documentTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="accessLevel">Nível de Acesso</Label>
                    <Select
                      value={formData.accessLevel}
                      onValueChange={(value) => setFormData({ ...formData, accessLevel: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o acesso" />
                      </SelectTrigger>
                      <SelectContent>
                        {accessLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="keywords">Palavras-chave</Label>
                  <Input
                    id="keywords"
                    value={formData.keywords}
                    onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                    placeholder="formação, espiritualidade, comunidade"
                  />
                </div>

                {/* NOVA SEÇÃO: Upload de arquivo */}
                <div className="space-y-2">
                  <Label htmlFor="file">Anexar Arquivo (opcional)</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="file"
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.txt,.odt,.xlsx,.xls"
                      className="flex-1"
                    />
                    {selectedFile && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={handleRemoveFile}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  {selectedFile && (
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted">
                      <File className="h-4 w-4 text-muted-foreground" />
                      <div className="flex-1 text-sm">
                        <p className="font-medium">{selectedFile.name}</p>
                        <p className="text-muted-foreground text-xs">{formatFileSize(selectedFile.size)}</p>
                      </div>
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Tipos aceitos: PDF, Word, Excel, TXT, ODT (máx. 10MB)
                  </p>
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
        )}
      </div>

      {documents.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-muted-foreground">Nenhum documento disponível</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <Card key={doc.id} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="line-clamp-1 flex-1">{doc.title || "Sem título"}</CardTitle>
                  {isAdmin && (
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleEdit(doc)}>
                        <Pencil className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleDelete(doc.id)}>
                        <Trash2 className="h-3 w-3 text-destructive" />
                      </Button>
                    </div>
                  )}
                </div>
                <CardDescription className="line-clamp-2">
                  {doc.content?.substring(0, 100) || "Sem descrição"}...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      {documentTypes.find(t => t.value === doc.documentType)?.label || doc.documentType}
                    </Badge>
                    <Badge variant={getAccessBadgeColor(doc.accessLevel)} className="text-xs">
                      {accessLevels.find(l => l.value === doc.accessLevel)?.label || doc.accessLevel}
                    </Badge>
                  </div>
                  
                  {/* NOVA SEÇÃO: Exibir arquivo anexado */}
                  {doc.fileName && (
                    <div className="flex items-center gap-2 rounded-md bg-muted p-3">
                      <span className="text-2xl">{getFileIcon(doc.fileType)}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{doc.fileName}</p>
                        {doc.fileSize && (
                          <p className="text-xs text-muted-foreground">{formatFileSize(doc.fileSize)}</p>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {doc.keywords && (
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium">Tags:</span> {doc.keywords}
                    </div>
                  )}
                  
                  {/* NOVA SEÇÃO: Botões de ação */}
                  <div className="flex gap-2">
                    <Button className="flex-1" variant="outline" asChild>
                      <Link href={`/dashboard/documents/${doc.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        Ver
                      </Link>
                    </Button>
                    
                    {doc.fileName && (
                      <Button 
                        className="flex-1" 
                        variant="secondary"
                        onClick={() => handleDownload(doc)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Baixar
                      </Button>
                    )}
                  </div>
                  
                  {/* NOVA SEÇÃO: Upload para documentos sem arquivo (apenas admin) */}
                  {isAdmin && !doc.fileName && (
                    <div className="space-y-2 pt-2 border-t">
                      <Label className="text-xs">Adicionar arquivo</Label>
                      <Input
                        type="file"
                        ref={(el) => { uploadInputRefs.current[doc.id] = el }}
                        onChange={(e) => handleUploadFileChange(doc.id, e)}
                        accept=".pdf,.doc,.docx,.txt,.odt,.xlsx,.xls"
                        className="text-xs h-9"
                      />
                      <Button
                        size="sm"
                        className="w-full"
                        onClick={() => handleUploadToExisting(doc.id)}
                        disabled={!uploadFiles[doc.id] || uploadingId === doc.id}
                      >
                        {uploadingId === doc.id ? (
                          <>
                            <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-3 w-3" />
                            Enviar Arquivo
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}