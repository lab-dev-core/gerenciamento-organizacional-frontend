"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Loader2, FileText, TrendingUp } from "lucide-react"
import { searchApi } from "@/lib/api"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function SearchPage() {
  const { toast } = useToast()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [recent, setRecent] = useState<any[]>([])
  const [mostViewed, setMostViewed] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    try {
      const data = await searchApi.searchByContent(query)
      setResults(data)
    } catch (error) {
      toast({ title: "Erro ao buscar documentos", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const loadRecent = async () => {
    try {
      const data = await searchApi.getRecent()
      setRecent(data)
    } catch (error) {
      console.error("Error loading recent documents")
    }
  }

  const loadMostViewed = async () => {
    try {
      const data = await searchApi.getMostViewed()
      setMostViewed(data)
    } catch (error) {
      console.error("Error loading most viewed documents")
    }
  }

  useState(() => {
    loadRecent()
    loadMostViewed()
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Buscar Documentos</h1>
        <p className="text-muted-foreground">Encontre documentos formativos por conteúdo ou título</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              placeholder="Digite sua busca..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
              Buscar
            </Button>
          </form>
        </CardContent>
      </Card>

      {results.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Resultados da Busca</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {results.map((doc) => (
              <Card key={doc.id} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="line-clamp-1">{doc.title || "Sem título"}</CardTitle>
                  <CardDescription className="line-clamp-2">{doc.description || "Sem descrição"}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-transparent" variant="outline" asChild>
                    <Link href={`/dashboard/documents/${doc.id}`}>Ver Documento</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recent.length === 0 ? (
              <p className="text-sm text-muted-foreground">Nenhum documento recente</p>
            ) : (
              <div className="space-y-2">
                {recent.slice(0, 5).map((doc) => (
                  <Link
                    key={doc.id}
                    href={`/dashboard/documents/${doc.id}`}
                    className="block rounded-lg p-2 text-sm hover:bg-accent"
                  >
                    {doc.title || "Documento sem título"}
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Mais Visualizados
            </CardTitle>
          </CardHeader>
          <CardContent>
            {mostViewed.length === 0 ? (
              <p className="text-sm text-muted-foreground">Nenhum documento disponível</p>
            ) : (
              <div className="space-y-2">
                {mostViewed.slice(0, 5).map((doc) => (
                  <Link
                    key={doc.id}
                    href={`/dashboard/documents/${doc.id}`}
                    className="block rounded-lg p-2 text-sm hover:bg-accent"
                  >
                    {doc.title || "Documento sem título"}
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
