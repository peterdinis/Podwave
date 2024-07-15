"use client"

import { FC, Key, useState } from 'react';
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

const NavigationSearch: FC = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    /* const { data: podcasts, isLoading, error, refetch } = useQuery(
        api.podcasts.getPodcastBySearch,
        { search: searchQuery }
    ); */

    const {data, isLoading, error, refetch} = useQuery(api.podcasts.getPodcastBySearch, {
        search: searchQuery
    })

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const handleSearch = async () => {
        refetch({ search: searchQuery });
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
                <Dialog open={isDialogOpen}>
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
                            <Button onClick={handleSearch}>Search</Button>
                        </DialogDescription>
                        <DialogDescription className='mt-10'>
                            {isLoading && <p>Loading...</p>}
                            {error && <p>Error: {error.message}</p>}
                            {podcasts && (
                                <ul>
                                    {podcasts.map((podcast: { id: Key; podcastTitle: string }) => (
                                        <li key={podcast.id}>
                                            {podcast.podcastTitle}
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