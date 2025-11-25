module.exports = [
"[project]/Downloads/religious-community-system (2)/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// API client configuration for backend integration
__turbopack_context__.s([
    "ApiClient",
    ()=>ApiClient,
    "authApi",
    ()=>authApi,
    "categoriesApi",
    ()=>categoriesApi,
    "documentsApi",
    ()=>documentsApi,
    "locationsApi",
    ()=>locationsApi,
    "progressApi",
    ()=>progressApi,
    "rolesApi",
    ()=>rolesApi,
    "searchApi",
    ()=>searchApi,
    "stagesApi",
    ()=>stagesApi,
    "usersApi",
    ()=>usersApi
]);
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
class ApiClient {
    static token = null;
    static setToken(token) {
        this.token = token;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    static getToken() {
        if (this.token) return this.token;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return null;
    }
    static clearToken() {
        this.token = null;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    static async request(endpoint, options = {}) {
        const token = this.getToken();
        const headers = {
            "Content-Type": "application/json",
            ...token && {
                Authorization: `Bearer ${token}`
            },
            ...options.headers
        };
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                ...options,
                headers
            });
            if (response.status === 401) {
                this.clearToken();
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
            }
            if (!response.ok) {
                const error = {
                    message: `HTTP error! status: ${response.status}`,
                    status: response.status
                };
                throw error;
            }
            return await response.json();
        } catch (error) {
            console.error("[v0] API request failed:", error);
            throw error;
        }
    }
    static async get(endpoint) {
        return this.request(endpoint, {
            method: "GET"
        });
    }
    static async post(endpoint, data) {
        return this.request(endpoint, {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    static async put(endpoint, data) {
        return this.request(endpoint, {
            method: "PUT",
            body: JSON.stringify(data)
        });
    }
    static async delete(endpoint) {
        return this.request(endpoint, {
            method: "DELETE"
        });
    }
}
const authApi = {
    login: (username, password)=>ApiClient.post("/api/auth/login", {
            username,
            password
        })
};
const usersApi = {
    getAll: ()=>ApiClient.get("/api/users"),
    getById: (id)=>ApiClient.get(`/api/users/${id}`),
    create: (user)=>ApiClient.post("/api/users", user),
    update: (id, user)=>ApiClient.put(`/api/users/${id}`, user),
    delete: (id)=>ApiClient.delete(`/api/users/${id}`),
    assignRole: (userId, roleId)=>ApiClient.put(`/api/users/${userId}/role/${roleId}`, {})
};
const documentsApi = {
    getAccessible: ()=>ApiClient.get("/api/documents"),
    getById: (id)=>ApiClient.get(`/api/documents/${id}`),
    create: (document1)=>ApiClient.post("/api/documents", document1),
    update: (id, document1)=>ApiClient.put(`/api/documents/${id}`, document1),
    delete: (id)=>ApiClient.delete(`/api/documents/${id}`),
    getByStage: (stage)=>ApiClient.get(`/api/documents/by-stage/${stage}`),
    getByLocation: (locationId)=>ApiClient.get(`/api/documents/by-location/${locationId}`),
    uploadFile: async (documentId, file)=>{
        const formData = new FormData();
        formData.append('file', file);
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/api/documents/${documentId}/upload`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });
        if (!response.ok) {
            throw new Error('Falha ao fazer upload do arquivo');
        }
        return response.json();
    },
    downloadFile: async (documentId, fileName)=>{
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/api/documents/${documentId}/download`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Falha ao baixar arquivo');
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }
};
const searchApi = {
    searchDocuments: (params)=>{
        const query = new URLSearchParams(params).toString();
        return ApiClient.get(`/api/search/documents?${query}`);
    },
    searchByContent: (text)=>ApiClient.get(`/api/search/content?text=${encodeURIComponent(text)}`),
    getRecent: ()=>ApiClient.get("/api/search/recent"),
    getMostViewed: (page = 0, size = 10)=>ApiClient.get(`/api/search/most-viewed?page=${page}&size=${size}`),
    getRecommended: (page = 0, size = 10)=>ApiClient.get(`/api/search/recommended?page=${page}&size=${size}`)
};
const progressApi = {
    getDocumentProgress: (documentId)=>ApiClient.get(`/api/reading-progress/document/${documentId}`),
    updateProgress: (documentId, data)=>ApiClient.post(`/api/reading-progress/document/${documentId}`, data),
    getCompleted: ()=>ApiClient.get("/api/reading-progress/completed"),
    getInProgress: ()=>ApiClient.get("/api/reading-progress/in-progress"),
    getRecent: ()=>ApiClient.get("/api/reading-progress/recent"),
    reset: (documentId)=>ApiClient.delete(`/api/reading-progress/document/${documentId}`)
};
const rolesApi = {
    getAll: ()=>ApiClient.get("/api/roles"),
    getById: (id)=>ApiClient.get(`/api/roles/${id}`),
    create: (role)=>ApiClient.post("/api/roles", role),
    update: (id, role)=>ApiClient.put(`/api/roles/${id}`, role),
    delete: (id)=>ApiClient.delete(`/api/roles/${id}`),
    getUsersByRole: (id)=>ApiClient.get(`/api/roles/${id}/users`)
};
const locationsApi = {
    getAll: ()=>ApiClient.get("/api/locations"),
    getById: (id)=>ApiClient.get(`/api/locations/${id}`),
    create: (location)=>ApiClient.post("/api/locations", location),
    update: (id, location)=>ApiClient.put(`/api/locations/${id}`, location),
    delete: (id)=>ApiClient.delete(`/api/locations/${id}`),
    getByCity: (city)=>ApiClient.get(`/api/locations/by-city/${city}`),
    getByState: (state)=>ApiClient.get(`/api/locations/by-state/${state}`),
    assignCoordinator: (locationId, userId)=>ApiClient.put(`/api/locations/${locationId}/coordinator/${userId}`, {}),
    getUsers: (id)=>ApiClient.get(`/api/locations/${id}/users`)
};
const stagesApi = {
    getAll: ()=>ApiClient.get("/api/stages"),
    getById: (id)=>ApiClient.get(`/api/stages/${id}`),
    getByUser: (userId)=>ApiClient.get(`/api/stages/user/${userId}`),
    create: (userId, stage)=>ApiClient.post(`/api/stages/user/${userId}`, stage),
    update: (id, stage)=>ApiClient.put(`/api/stages/${id}`, stage),
    delete: (id)=>ApiClient.delete(`/api/stages/${id}`),
    complete: (id)=>ApiClient.put(`/api/stages/${id}/complete`, {}),
    getActive: ()=>ApiClient.get("/api/stages/active")
};
const categoriesApi = {
    getAll: ()=>ApiClient.get("/api/categories"),
    getRoot: ()=>ApiClient.get("/api/categories/root"),
    getById: (id)=>ApiClient.get(`/api/categories/${id}`),
    getSubcategories: (id)=>ApiClient.get(`/api/categories/${id}/subcategories`),
    create: (category)=>ApiClient.post("/api/categories", category),
    update: (id, category)=>ApiClient.put(`/api/categories/${id}`, category),
    delete: (id)=>ApiClient.delete(`/api/categories/${id}`)
};
}),
"[project]/Downloads/religious-community-system (2)/lib/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUser",
    ()=>getUser,
    "isAuthenticated",
    ()=>isAuthenticated,
    "logout",
    ()=>logout,
    "setUser",
    ()=>setUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$religious$2d$community$2d$system__$28$2$292f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/religious-community-system (2)/lib/api.ts [app-ssr] (ecmascript)");
"use client";
;
function setUser(user) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function getUser() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return null;
}
function logout() {
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$religious$2d$community$2d$system__$28$2$292f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiClient"].clearToken();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function isAuthenticated() {
    return !!__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$religious$2d$community$2d$system__$28$2$292f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiClient"].getToken();
}
}),
"[project]/Downloads/religious-community-system (2)/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$religious$2d$community$2d$system__$28$2$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/religious-community-system (2)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$religious$2d$community$2d$system__$28$2$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/religious-community-system (2)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$religious$2d$community$2d$system__$28$2$292f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/religious-community-system (2)/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$religious$2d$community$2d$system__$28$2$292f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/religious-community-system (2)/lib/auth.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function HomePage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$religious$2d$community$2d$system__$28$2$292f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$religious$2d$community$2d$system__$28$2$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$religious$2d$community$2d$system__$28$2$292f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAuthenticated"])()) {
            router.push("/dashboard");
        } else {
            router.push("/login");
        }
    }, [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$religious$2d$community$2d$system__$28$2$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$religious$2d$community$2d$system__$28$2$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"
        }, void 0, false, {
            fileName: "[project]/Downloads/religious-community-system (2)/app/page.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/religious-community-system (2)/app/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/religious-community-system (2)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Downloads/religious-community-system (2)/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=Downloads_religious-community-system%20%282%29_6949b12b._.js.map