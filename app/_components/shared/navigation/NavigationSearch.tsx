"use client";

import { FC, useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import Header from '../Header';
import { Button } from '@/components/ui/button';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { NavigationPodcast } from '@/app/_types/podcastTypes';
import { Loader2 } from 'lucide-react';

const NavigationSearch: FC = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [podcasts, setPodcasts] = useState<NavigationPodcast[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const queryResult = useQuery(api.podcasts.getPodcastBySearch, { search: searchQuery });

    useEffect(() => {
        if (queryResult instanceof Error) {
            setError(queryResult.message);
            setIsLoading(false);
        } else if (queryResult && searchQuery) {
            setPodcasts(queryResult);
            setIsLoading(false);
            setError(null);
        } else {
            setPodcasts([]);
            setIsLoading(false);
        }
    }, [queryResult, searchQuery]);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
        setSearchQuery('');
        setPodcasts([]);
    };

    return (
        <>
            <Input
                className='focus:shadow-outline w-full rounded-full bg-gray-100 py-2 pl-4 text-xs font-bold uppercase leading-tight text-gray-700 focus:outline-none sm:w-10/12 md:w-8/12 lg:w-6/12 lg:text-sm xl:w-4/12'
                type='text'
                placeholder='Search'
                onClick={openDialog}
            />
            {isDialogOpen && (
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent>
                        <DialogClose onClick={closeDialog} />
                        <DialogTitle>
                            <Header text='Search for podcast or category' />
                        </DialogTitle>
                        <DialogDescription className='mt-5'>
                            <Input
                                type='text'
                                placeholder='Search'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </DialogDescription>
                        <DialogDescription className='mt-10'>
                            {isLoading && <Loader2 className='animate-spin w-5 h-5' />}
                            {error && <p className='font-bold text-red-600 mt-3 prose prose-p:'>Error: {error}</p>}
                            {podcasts.length > 0 && (
                                <ul>
                                    {podcasts.map((podcast) => (
                                        <li key={podcast._id}>
                                            <span className='mt-5 font-bold prose prose:span dark:text-blue-50'>{podcast.podcastTitle}<Button className='float-right' size={"sm"}>Detail</Button></span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </DialogDescription>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
};

export default NavigationSearch;