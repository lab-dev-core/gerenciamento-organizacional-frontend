"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Loader2, FileText, Video, FileImage } from "lucide-react"
import { documentsApi } from "@/lib/api"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function LibraryPage() {
  const { toast } = useToast()
  const [documents, setDocuments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDocuments()
  }, [])

  const fetchDocuments = async () => {
    try {
      const data = await documentsApi.getAccessible()
      setDocuments(data)
    } catch (error) {
      toast({ title: "Erro ao carregar biblioteca", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const filterByType = (type: string) => {
    return documents.filter((doc) => doc.documentType === type)
  }

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  const DocumentCard = ({ doc }: { doc: any }) => {
    const getIcon = () => {
      switch (doc.documentType) {
        case "VIDEO":
          return <Video className="h-5 w-5" />
        case "IMAGE":
          return <FileImage className="h-5 w-5" />
        default:
          return <FileText className="h-5 w-5" />
      }
    }

    return (
      <Card className="transition-shadow hover:shadow-lg">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="line-clamp-1 text-base">{doc.title || "Sem título"}</CardTitle>
              <CardDescription className="line-clamp-2">{doc.description || "Sem descrição"}</CardDescription>
            </div>
            {getIcon()}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {doc.accessLevel && <Badge variant="secondary">{doc.accessLevel}</Badge>}
              {doc.documentType && <Badge variant="outline">{doc.documentType}</Badge>}
            </div>
            <Link
              href={`/dashboard/documents/${doc.id}`}
              className="mt-4 flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Acessar
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Biblioteca</h1>
        <p className="text-muted-foreground">Explore todos os documentos formativos disponíveis</p>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todos ({documents.length})</TabsTrigger>
          <TabsTrigger value="PDF">Documentos ({filterByType("PDF").length})</TabsTrigger>
          <TabsTrigger value="VIDEO">Vídeos ({filterByType("VIDEO").length})</TabsTrigger>
          <TabsTrigger value="TEXT">Textos ({filterByType("TEXT").length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
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
                <DocumentCard key={doc.id} doc={doc} />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="PDF">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filterByType("PDF").map((doc) => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="VIDEO">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filterByType("VIDEO").map((doc) => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="TEXT">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filterByType("TEXT").map((doc) => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
