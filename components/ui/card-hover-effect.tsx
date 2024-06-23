'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { CardDescription, CardTitle } from './card';

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                'grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3',
                className,
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={item?.link}
                    key={item?.link}
                    className='group relative block h-full w-full p-2'
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className='absolute inset-0 block h-full w-full rounded-3xl bg-primary dark:bg-slate-800/[0.8]'
                                layoutId='hoverBackground'
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription className='p-2 text-xl font-bold'>
                            {item.description}
                        </CardDescription>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
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
