module.exports = [
"[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "followupsApi",
    ()=>followupsApi,
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
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081";
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
    // lib/api.ts
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
                // interrompe aqui
                throw {
                    message: "Unauthorized",
                    status: 401
                };
            }
            if (!response.ok) {
                // tenta extrair mensagem do corpo (json ou texto)
                let serverMessage = null;
                const ct = response.headers.get("content-type") || "";
                try {
                    if (ct.includes("application/json")) {
                        serverMessage = await response.json();
                    } else {
                        const text = await response.text();
                        serverMessage = text || null;
                    }
                } catch (_) {
                /* ignore */ }
                const error = {
                    message: serverMessage?.message || serverMessage || `HTTP error! status: ${response.status}`,
                    status: response.status
                };
                throw error;
            }
            // Sucesso: lida com 204/sem corpo e content-types não-JSON
            if (response.status === 204) {
                return undefined;
            }
            const ct = response.headers.get("content-type") || "";
            if (ct.includes("application/json")) {
                return await response.json();
            }
            // Se não for JSON, tenta texto; se vazio, retorna undefined
            const text = await response.text();
            return text;
        } catch (error) {
            // log mais útil
            const e = error;
            console.error("[v0] API request failed:", {
                message: e?.message,
                status: e?.status
            });
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081'}/api/documents/${documentId}/upload`, {
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081'}/api/documents/${documentId}/download`, {
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
const followupsApi = {
    getAccessible: ()=>ApiClient.get("/api/follow-up"),
    getMyMeetings: ()=>ApiClient.get("/api/follow-up/my-meetings"),
    getByMentee: (menteeId)=>ApiClient.get(`/api/follow-up/mentee/${menteeId}`),
    create: (dto)=>ApiClient.post("/api/follow-up", dto),
    update: (id, dto)=>ApiClient.put(`/api/follow-up/${id}`, dto),
    delete: (id)=>ApiClient.delete(`/api/follow-up/${id}`),
    markAsCompleted: (id)=>ApiClient.put(`/api/follow-up/${id}/complete`, {}),
    cancel: (id)=>ApiClient.put(`/api/follow-up/${id}/cancel`, {}),
    shareWithUser: (id, userId)=>ApiClient.post(`/api/follow-up/${id}/share/user/${userId}`, {}),
    shareWithRole: (id, roleId)=>ApiClient.post(`/api/follow-up/${id}/share/role/${roleId}`, {}),
    removeShareWithUser: (id, userId)=>ApiClient.delete(`/api/follow-up/${id}/share/user/${userId}`),
    getByStatus: (status)=>ApiClient.get(`/api/follow-up/status/${status}`),
    getUpcoming: (days = 7)=>ApiClient.get(`/api/follow-up/upcoming?days=${days}`),
    getByDateRange: (startIso, endIso)=>ApiClient.get(`/api/follow-up/date-range?startDate=${encodeURIComponent(startIso)}&endDate=${encodeURIComponent(endIso)}`),
    getStatistics: ()=>ApiClient.get(`/api/follow-up/statistics`)
};
}),
"[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/lib/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/lib/api.ts [app-ssr] (ecmascript)");
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
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiClient"].clearToken();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function isAuthenticated() {
    return !!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiClient"].getToken();
}
}),
"[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/lib/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
"use client";
;
;
;
;
;
;
;
;
;
;
function LoginPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setIsLoading(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].login(username, password);
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiClient"].setToken(response.token);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setUser"])({
                id: response.id,
                username: response.username,
                name: response.name,
                role: response.role
            });
            router.push("/dashboard");
        } catch (err) {
            setError("Credenciais inválidas. Por favor, tente novamente.");
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4 dark:from-slate-950 dark:to-slate-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-full max-w-md shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "space-y-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "h-8 w-8 text-primary-foreground"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-2xl",
                                    children: "Sistema Formativo"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    className: "text-base",
                                    children: "Bem-vindo! Entre com suas credenciais"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "username",
                                        children: "Usuário"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "username",
                                        type: "text",
                                        placeholder: "Digite seu usuário",
                                        value: username,
                                        onChange: (e)=>setUsername(e.target.value),
                                        required: true,
                                        disabled: isLoading
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "password",
                                        children: "Senha"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "password",
                                        type: "password",
                                        placeholder: "Digite sua senha",
                                        value: password,
                                        onChange: (e)=>setPassword(e.target.value),
                                        required: true,
                                        disabled: isLoading
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-destructive/10 p-3 text-sm text-destructive",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                                lineNumber: 82,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                className: "w-full",
                                disabled: isLoading,
                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$Projetos$2f$DevCore$2f$gerenciamento$2d$organizacional$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "mr-2 h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this),
                                        "Entrando..."
                                    ]
                                }, void 0, true) : "Entrar"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/Projetos/DevCore/gerenciamento-organizacional-frontend/app/login/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=13466_Documentos_Projetos_DevCore_gerenciamento-organizacional-frontend_b34a482e._.js.map