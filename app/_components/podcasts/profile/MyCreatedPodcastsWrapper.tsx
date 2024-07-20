'use client';

import { FC } from 'react';
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';

const MyCreatedPodcastsWrapper: FC = () => {
    const { user } = useUser();
    const data = useQuery(api.podcasts.getAllPodcasts, {});

    const podcasts =
        data?.podcast.filter((podcast) => podcast.authorId === user?.id) || [];

    return (
        <div className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
            <ScrollArea>
                <div className='relative max-h-[400px] w-full overflow-auto'>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Podcast</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Audio URL</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {podcasts.map((podcast) => (
                                <TableRow key={podcast._id}>
                                    <TableCell>
                                        {podcast.podcastTitle}
                                    </TableCell>
                                    <TableCell>
                                        {podcast.podcastDescription}
                                    </TableCell>
                                    <TableCell>
                                        <a
                                            href={podcast.audioUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            Listen
                                        </a>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </ScrollArea>
        </div>
    );
};

export default MyCreatedPodcastsWrapper;
