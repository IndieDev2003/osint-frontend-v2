import type { ReactNode } from "react";

export function Container({ children}:{children:ReactNode}) {
    return <div className="px-2 py-2 bg-gray-100 min-h-screen min-w-screen">{children}</div>
}