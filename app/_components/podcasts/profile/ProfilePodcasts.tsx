"use client"

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    MoreHorizontal,
} from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import { FC } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import ProfilePodcastsPagination from './ProfilePodcastsPagination';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/components/ui/use-toast';
import {format} from "date-fns";

const ProfilePodcasts: FC = () => {

    const {toast} = useToast();

    const removePodcast = () => {
        toast({
            title: "Podcast was removed",
            duration: 2000,
            className: "bg-green-500 text-white font-bold"
        })
    }

    return (
        <ScrollArea>
            <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
                <Tabs defaultValue='all'>
                    <TabsContent value='all'>
                        <Card x-chunk='dashboard-06-chunk-0'>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className='hidden w-[100px] sm:table-cell'>
                                                Image
                                            </TableHead>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Description</TableHead>
                                            <TableHead className='hidden md:table-cell'>
                                                Added
                                            </TableHead>
                                            <TableHead>
                                                Actions
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className='hidden sm:table-cell'>
                                                <Image
                                                    alt='Product image'
                                                    className='aspect-square rounded-md object-cover'
                                                    height='64'
                                                    src='https://image-placeholder.com/images/actual-size/75x75.png'
                                                    width='64'
                                                />
                                            </TableCell>
                                            <TableCell className='font-medium'>
                                                Laser Lemonade Machine
                                            </TableCell>
                                            <TableCell className='hidden md:table-cell'>
                                                25
                                            </TableCell>
                                            <TableCell className='hidden md:table-cell'>
                                                {format(new Date(), 'yyyy-MM-dd')}
                                            </TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        asChild
                                                    >
                                                        <Button
                                                            aria-haspopup='true'
                                                            size='icon'
                                                            variant='ghost'
                                                        >
                                                            <MoreHorizontal className='h-4 w-4' />
                                                            <span className='sr-only'>
                                                                Toggle menu
                                                            </span>
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align='end'>
                                                        <DropdownMenuItem>
                                                            <Button onClick={removePodcast} className='text-red-600 hover:text-red-800 bg-transparent' variant={"link"}>
                                                                Remove from favorites
                                                            </Button>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                            <CardFooter>
                                <ProfilePodcastsPagination />
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
        </ScrollArea>
    );
};

export default ProfilePodcasts;
