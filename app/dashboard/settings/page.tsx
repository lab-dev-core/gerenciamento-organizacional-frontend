"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.newPassword !== formData.confirmPassword) {
      toast({ title: "As senhas não coincidem", variant: "destructive" })
      return
    }

    setLoading(true)
    try {
      // chamada API
      toast({ title: "Senha alterada com sucesso" })
      setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" })
    } catch (error) {
      toast({ title: "Erro ao alterar senha", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">Gerencie suas preferências e informações da conta</p>
      </div>

      {/* Informações da Conta */}
      <Card>
        <CardHeader>
          <CardTitle>Informações da Conta</CardTitle>
          <CardDescription>Suas informações pessoais e de acesso</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="block mb-2">Nome</Label>
              <Input id="name" value={user?.name || ""} disabled />
            </div>
            <div>
              <Label htmlFor="username" className="block mb-2">Nome de Usuário</Label>
              <Input id="username" value={user?.username || ""} disabled />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="role" className="block mb-2">Papel</Label>
              <Input id="role" value={user?.role || ""} disabled />
            </div>
            <div>
              <Label htmlFor="lifeStage" className="block mb-2">Etapa Formativa</Label>
              <Input id="lifeStage" value={user?.lifeStage || "N/A"} disabled />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alterar Senha */}
      <Card>
        <CardHeader>
          <CardTitle>Alterar Senha</CardTitle>
          <CardDescription>Atualize sua senha de acesso ao sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordChange} className="space-y-6">
            <div>
              <Label htmlFor="currentPassword" className="block mb-2">Senha Atual</Label>
              <Input
                id="currentPassword"
                type="password"
                value={formData.currentPassword}
                onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                required
              />
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="newPassword" className="block mb-2">Nova Senha</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={formData.newPassword}
                  onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword" className="block mb-2">Confirmar Nova Senha</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit" disabled={loading}>
                {loading ? "Salvando..." : "Alterar Senha"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Configurações Administrativas */}
      {user?.role === "ADMIN" && (
        <Card>
          <CardHeader>
            <CardTitle>Configurações do Sistema</CardTitle>
            <CardDescription>Configurações administrativas gerais</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Configurações avançadas do sistema podem ser gerenciadas através do backend.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
