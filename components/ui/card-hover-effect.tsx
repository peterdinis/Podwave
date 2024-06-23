'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) => {
    return (
        <div
            className={cn(
                'relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-zinc-300 p-4 group-hover:border-slate-700 dark:border-white/[0.2] dark:bg-zinc-800',
                className,
            )}
        >
            <div className='relative z-50'>
                <div className='p-4'>{children}</div>
            </div>
        </div>
    );
};
