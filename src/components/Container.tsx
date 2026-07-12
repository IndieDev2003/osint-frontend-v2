import type { ReactNode } from "react";

export function Container({ children}:{children:ReactNode}) {
    return <div className="px-2 py-2 space-y-1 bg-slate-400/40 min-h-screen w-full">{children}</div>
}