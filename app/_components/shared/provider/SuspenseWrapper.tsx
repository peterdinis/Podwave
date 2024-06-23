"use client"

import { Loader2 } from "lucide-react";
import { FC, ReactNode, Suspense } from "react";

interface ISuspenseWrapperProps {
    children?: ReactNode;
}

const SuspenseWrapper: FC<ISuspenseWrapperProps> = ({children}: ISuspenseWrapperProps) => {
    return (
        <Suspense
            fallback={<Loader2 className="animate-spin w-8 h-8" />}
        >
            {children}
        </Suspense>
    )
}

export default SuspenseWrapper;