// API client configuration for backend integration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"

interface ApiError {
  message: string
  status: number
}

export class ApiClient {
  private static token: string | null = null

  static setToken(token: string) {
    this.token = token
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token)
    }
  }

  static getToken(): string | null {
    if (this.token) return this.token
    if (typeof window !== "undefined") {
      return localStorage.getItem("auth_token")
    }
    return null
  }

  static clearToken() {
    this.token = null
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token")
      localStorage.removeItem("user_data")
    }
  }

  private static async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const token = this.getToken()
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    }

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
      })

      if (response.status === 401) {
        this.clearToken()
        if (typeof window !== "undefined") {
          window.location.href = "/login"
        }
      }

      if (!response.ok) {
        const error: ApiError = {
          message: `HTTP error! status: ${response.status}`,
          status: response.status,
        }
        throw error
      }

      return await response.json()
    } catch (error) {
      console.error("[v0] API request failed:", error)
      throw error
    }
  }

  static async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: "GET" })
  }

  static async post<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
  }

  static async put<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    })
  }

  static async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: "DELETE" })
  }
}

// Auth API
export const authApi = {
  login: (username: string, password: string) =>
    ApiClient.post<{
      token: string
      id: number
      username: string
      name: string
      role: string
    }>("/api/auth/login", { username, password }),
}

// Users API
export const usersApi = {
  getAll: () => ApiClient.get<any[]>("/api/users"),
  getById: (id: number) => ApiClient.get<any>(`/api/users/${id}`),
  create: (user: any) => ApiClient.post<any>("/api/users", user),
  update: (id: number, user: any) => ApiClient.put<any>(`/api/users/${id}`, user),
  delete: (id: number) => ApiClient.delete<void>(`/api/users/${id}`),
  assignRole: (userId: number, roleId: number) => ApiClient.put<any>(`/api/users/${userId}/role/${roleId}`, {}),
}

// Documents API
export const documentsApi = {
  getAccessible: () => ApiClient.get<any[]>("/api/documents"),
  getById: (id: number) => ApiClient.get<any>(`/api/documents/${id}`),
  create: (document: any) => ApiClient.post<any>("/api/documents", document),
  update: (id: number, document: any) => ApiClient.put<any>(`/api/documents/${id}`, document),
  delete: (id: number) => ApiClient.delete<void>(`/api/documents/${id}`),
  getByStage: (stage: string) => ApiClient.get<any[]>(`/api/documents/by-stage/${stage}`),
  getByLocation: (locationId: number) => ApiClient.get<any[]>(`/api/documents/by-location/${locationId}`),
  
  uploadFile: async (documentId: number, file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    
    const token = localStorage.getItem('token')
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/api/documents/${documentId}/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    })
    
    if (!response.ok) {
      throw new Error('Falha ao fazer upload do arquivo')
    }
    return response.json()
  },
  
  downloadFile: async (documentId: number, fileName: string) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/api/documents/${documentId}/download`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    
    if (!response.ok) {
      throw new Error('Falha ao baixar arquivo')
    }
    
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  },
}

// Search API
export const searchApi = {
  searchDocuments: (params: any) => {
    const query = new URLSearchParams(params).toString()
    return ApiClient.get<any>(`/api/search/documents?${query}`)
  },
  searchByContent: (text: string) => ApiClient.get<any[]>(`/api/search/content?text=${encodeURIComponent(text)}`),
  getRecent: () => ApiClient.get<any[]>("/api/search/recent"),
  getMostViewed: (page = 0, size = 10) => ApiClient.get<any[]>(`/api/search/most-viewed?page=${page}&size=${size}`),
  getRecommended: (page = 0, size = 10) => ApiClient.get<any[]>(`/api/search/recommended?page=${page}&size=${size}`),
}

// Reading Progress API
export const progressApi = {
  getDocumentProgress: (documentId: number) => ApiClient.get<any>(`/api/reading-progress/document/${documentId}`),
  updateProgress: (documentId: number, data: any) =>
    ApiClient.post<any>(`/api/reading-progress/document/${documentId}`, data),
  getCompleted: () => ApiClient.get<any[]>("/api/reading-progress/completed"),
  getInProgress: () => ApiClient.get<any[]>("/api/reading-progress/in-progress"),
  getRecent: () => ApiClient.get<any[]>("/api/reading-progress/recent"),
  reset: (documentId: number) => ApiClient.delete<void>(`/api/reading-progress/document/${documentId}`),
}

// Roles API
export const rolesApi = {
  getAll: () => ApiClient.get<any[]>("/api/roles"),
  getById: (id: number) => ApiClient.get<any>(`/api/roles/${id}`),
  create: (role: any) => ApiClient.post<any>("/api/roles", role),
  update: (id: number, role: any) => ApiClient.put<any>(`/api/roles/${id}`, role),
  delete: (id: number) => ApiClient.delete<void>(`/api/roles/${id}`),
  getUsersByRole: (id: number) => ApiClient.get<any[]>(`/api/roles/${id}/users`),
}

// Locations API
export const locationsApi = {
  getAll: () => ApiClient.get<any[]>("/api/locations"),
  getById: (id: number) => ApiClient.get<any>(`/api/locations/${id}`),
  create: (location: any) => ApiClient.post<any>("/api/locations", location),
  update: (id: number, location: any) => ApiClient.put<any>(`/api/locations/${id}`, location),
  delete: (id: number) => ApiClient.delete<void>(`/api/locations/${id}`),
  getByCity: (city: string) => ApiClient.get<any[]>(`/api/locations/by-city/${city}`),
  getByState: (state: string) => ApiClient.get<any[]>(`/api/locations/by-state/${state}`),
  assignCoordinator: (locationId: number, userId: number) =>
    ApiClient.put<any>(`/api/locations/${locationId}/coordinator/${userId}`, {}),
  getUsers: (id: number) => ApiClient.get<any[]>(`/api/locations/${id}/users`),
}

// Stages API
export const stagesApi = {
  getAll: () => ApiClient.get<any[]>("/api/stages"),
  getById: (id: number) => ApiClient.get<any>(`/api/stages/${id}`),
  getByUser: (userId: number) => ApiClient.get<any[]>(`/api/stages/user/${userId}`),
  create: (userId: number, stage: any) => ApiClient.post<any>(`/api/stages/user/${userId}`, stage),
  update: (id: number, stage: any) => ApiClient.put<any>(`/api/stages/${id}`, stage),
  delete: (id: number) => ApiClient.delete<void>(`/api/stages/${id}`),
  complete: (id: number) => ApiClient.put<any>(`/api/stages/${id}/complete`, {}),
  getActive: () => ApiClient.get<any[]>("/api/stages/active"),
}

// Categories API
export const categoriesApi = {
  getAll: () => ApiClient.get<any[]>("/api/categories"),
  getRoot: () => ApiClient.get<any[]>("/api/categories/root"),
  getById: (id: number) => ApiClient.get<any>(`/api/categories/${id}`),
  getSubcategories: (id: number) => ApiClient.get<any[]>(`/api/categories/${id}/subcategories`),
  create: (category: any) => ApiClient.post<any>("/api/categories", category),
  update: (id: number, category: any) => ApiClient.put<any>(`/api/categories/${id}`, category),
  delete: (id: number) => ApiClient.delete<void>(`/api/categories/${id}`),
}
