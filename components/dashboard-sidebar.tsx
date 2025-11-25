"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BookOpen, Users, FileText, BarChart3, MapPin, Shield, Settings, Home, Search, FolderOpen } from "lucide-react"
import { useAuth } from "./auth-provider"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Documentos", href: "/dashboard/documents", icon: FileText },
  { name: "Biblioteca", href: "/dashboard/library", icon: BookOpen },
  { name: "Buscar", href: "/dashboard/search", icon: Search },
  { name: "Meu Progresso", href: "/dashboard/progress", icon: BarChart3 },
  { name: "Minhas Etapas", href: "/dashboard/stages", icon: BarChart3 },
]

const adminNavigation = [
  { name: "Usuários", href: "/dashboard/users", icon: Users },
  { name: "Papéis", href: "/dashboard/roles", icon: Shield },
  { name: "Locais", href: "/dashboard/locations", icon: MapPin },
  { name: "Categorias", href: "/dashboard/categories", icon: FolderOpen },
  { name: "Configurações", href: "/dashboard/settings", icon: Settings },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const { user } = useAuth()

  const isAdmin = user?.role === "ADMIN"

  return (
    <aside className="hidden w-64 border-r border-border bg-card lg:block">
      <div className="flex h-16 items-center border-b border-border px-6">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">Sistema Formativo</span>
        </div>
      </div>
      <nav className="space-y-1 p-4">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </div>

        {isAdmin && (
          <>
            <div className="my-4 border-t border-border" />
            <div className="space-y-1">
              <p className="px-3 text-xs font-semibold text-muted-foreground">Administração</p>
              {adminNavigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </>
        )}
      </nav>
    </aside>
  )
}
