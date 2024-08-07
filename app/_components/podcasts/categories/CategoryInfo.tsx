'use client';

import { FC } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import DefaultLayout from '../../shared/layouts/DefaultLayout';
import Header from '../../shared/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { format } from 'date-fns';
import { PodcastType } from '@/app/_types/podcastTypes';
import { Ghost } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const CategoryInfo: FC = () => {
    const { id } = useParams();
    const router = useRouter();

    const data = useQuery(api.categories.getCategoryById, {
        categoryId: id[0] as unknown as Id<'categories'>,
    });

    return (
        <DefaultLayout>
            <Header text={data?.category?.categoryName as unknown as string} />
            <div className='prose-p: prose mt-8 text-xl font-bold text-white'>
                {data?.category?.categoryDescription}
            </div>
            <Separator />
            <h2 className='prose-h2: prose mt-5 text-xl font-bold dark:text-white'>
                Podcasts from this category
            </h2>
            <div className='mt-3'>
                <ScrollArea>
                    <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
                        <Tabs defaultValue='all'> 
                            <TabsContent value='all'>
                                <Card x-chunk='dashboard-06-chunk-0'>
                                    <CardContent>
                                        {data?.podcasts &&
                                        data.podcasts.length > 0 ? (
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead className='hidden w-[100px] sm:table-cell'>
                                                            Image
                                                        </TableHead>
                                                        <TableHead>
                                                            Name
                                                        </TableHead>
                                                        <TableHead>
                                                            Description
                                                        </TableHead>
                                                        <TableHead className='hidden md:table-cell'>
                                                            Added
                                                        </TableHead>
                                                        <TableHead>
                                                            Actions
                                                        </TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {data.podcasts.map(
                                                        (item: PodcastType) => (
                                                            <TableRow
                                                                key={item._id}
                                                            >
                                                                <TableCell className='hidden sm:table-cell'>
                                                                    <Image
                                                                        alt={
                                                                            item.podcastTitle as unknown as string
                                                                        }
                                                                        className='aspect-square rounded-md object-cover'
                                                                        height='64'
                                                                        src={
                                                                            item.imageUrl as unknown as string
                                                                        }
                                                                        width='64'
                                                                    />
                                                                </TableCell>
                                                                <TableCell className='font-medium'>
                                                                    {
                                                                        item.podcastTitle
                                                                    }
                                                                </TableCell>
                                                                <TableCell className='hidden md:table-cell'>
                                                                    {
                                                                        item.podcastDescription
                                                                    }
                                                                </TableCell>
                                                                <TableCell className='hidden md:table-cell'>
                                                                    {format(
                                                                        new Date(),
                                                                        'yyyy-MM-dd',
                                                                    )}
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Button
                                                                        onClick={() => {
                                                                            router.push(
                                                                                `/podcasts/${item._id}`,
                                                                            );
                                                                        }}
                                                                    >
                                                                        Detail
                                                                    </Button>
                                                                </TableCell>
                                                            </TableRow>
                                                        ),
                                                    )}
                                                </TableBody>
                                            </Table>
                                        ) : (
                                            <div className='text-center text-lg font-semibold'>
                                                <Ghost className='h-8 w-8 animate-bounce' />{' '}
                                                Category has no podcasts
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </main>
                </ScrollArea>
            </div>
        </DefaultLayout>
    );
};

export default CategoryInfo;
