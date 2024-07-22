'use client';

import { Card } from '@/components/ui/card-hover-effect';
import { FC, Key, useState } from 'react';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const CategoriesLists: FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const data = useQuery(api.categories.getAllCategories);
    const router = useRouter();

    return (
        <div
            className={cn(
                'grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3',
            )}
        >
            {data &&
                data.map((item, idx) => {
                    return (
                        <div
                            key={item._id as unknown as Key}
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
                                            transition: {
                                                duration: 0.15,
                                                delay: 0.2,
                                            },
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                            <Card>
                                <CardTitle>{item.categoryName}</CardTitle>
                                <CardDescription className='p-2 text-xl font-bold'>
                                    {item.categoryDescription}
                                </CardDescription>
                                <Button
                                    onClick={() => {
                                        router.push(
                                            `/podcasts/categories/${item._id}`,
                                        );
                                    }}
                                    className='mt-5'
                                >
                                    Detail
                                </Button>
                            </Card>
                        </div>
                    );
                })}
        </div>
    );
};

export default CategoriesLists;
