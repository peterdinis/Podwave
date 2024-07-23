'use client';

import { FC, useState, FormEvent } from 'react';
import { Star } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useUser } from '@clerk/nextjs';
import { format } from 'date-fns';
import { Id } from '@/convex/_generated/dataModel';
import Header from '../../shared/Header';
import { PodcastReviewProps } from '@/app/_types/podcastTypes';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

const PodcastReview: FC<PodcastReviewProps> = ({ podcastId }) => {
    const [reviewText, setReviewText] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { toast } = useToast();
    const { user } = useUser();
    const addReview = useMutation(api.reviews.createReview);

    const handleReviewSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!user) {
            toast({
                title: 'You must be logged in to submit a review',
                className: 'bg-red-600 text-white font-bold',
                duration: 2000,
            });
            return;
        }

        try {
            await addReview({
                podcastId: podcastId as Id<'podcasts'>,
                userId: user.id as Id<'users'>,
                reviewText,
                rating,
                reviewDate: format(new Date(), 'yyyy-MM-dd'),
            });
            toast({
                title: 'New review was created',
                className: 'bg-green-600 text-white font-bold',
                duration: 2000,
            });
            setReviewText('');
            setRating(0);
            setIsOpen(false);
        } catch (error) {
            toast({
                title: 'Failed to create review',
                className: 'bg-red-600 text-white font-bold',
                duration: 2000,
            });
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    className='mt-5'
                    variant={'default'}
                    onClick={() => setIsOpen(true)}
                >
                    Add a review to the podcast
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <Header text='Add a review to the podcast' />
                    </DialogTitle>
                    <form onSubmit={handleReviewSubmit} className='mt-4'>
                        <Label className='ml-2 text-lg font-bold'>
                            Your comment
                        </Label>
                        <Textarea
                            className='mt-2'
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder='Write comment'
                            required
                        />

                        <div className='mt-6'>
                            <Label className='text-lg font-bold'>Stars</Label>
                            <select
                                className='mt-2 flex h-10 w-full items-center justify-between rounded-md border border-input bg-background p-2 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                                value={rating}
                                onChange={(e) =>
                                    setRating(parseInt(e.target.value))
                                }
                                required
                            >
                                <option
                                    className='prose-p: prose text-lg'
                                    value={0}
                                    disabled
                                >
                                    How many stars <Star />
                                </option>
                                <option
                                    className='prose-p: prose text-lg'
                                    value={1}
                                >
                                    1
                                </option>
                                <option
                                    className='prose-p: prose text-lg'
                                    value={2}
                                >
                                    2
                                </option>
                                <option
                                    className='prose-p: prose text-lg'
                                    value={3}
                                >
                                    3
                                </option>
                                <option
                                    className='prose-p: prose text-lg'
                                    value={4}
                                >
                                    4
                                </option>
                                <option
                                    className='prose-p: prose text-lg'
                                    value={5}
                                >
                                    5
                                </option>
                            </select>
                        </div>
                        <Button
                            className='mt-4'
                            variant={'secondary'}
                            type='submit'
                        >
                            Add a review to the podcast
                        </Button>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default PodcastReview;
