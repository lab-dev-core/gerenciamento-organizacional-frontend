"use client"

import { ApiClient } from "./api"

export interface User {
  id: number
  username: string
  name: string
  role: string
  lifeStage?: string
  missionLocationId?: number
  missionLocationName?: string
}

export function setUser(user: User) {
  if (typeof window !== "undefined") {
    localStorage.setItem("user_data", JSON.stringify(user))
  }
}

export function getUser(): User | null {
  if (typeof window !== "undefined") {
    const userData = localStorage.getItem("user_data")
    return userData ? JSON.parse(userData) : null
  }
  return null
}

export function logout() {
  ApiClient.clearToken()
  if (typeof window !== "undefined") {
    window.location.href = "/login"
  }
}

export function isAuthenticated(): boolean {
  return !!ApiClient.getToken()
}
