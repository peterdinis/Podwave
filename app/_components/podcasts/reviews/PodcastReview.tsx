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
import { createReview } from '@/convex/reviews';
import { useToast } from '@/components/ui/use-toast';
import { useUser } from '@clerk/nextjs';
import { format } from 'date-fns';
import { Id } from '@/convex/_generated/dataModel';
import Header from '../../shared/Header';
import { PodcastReviewProps } from '@/app/_types/podcastTypes';

const PodcastReview: FC<PodcastReviewProps> = ({ podcastId }) => {
    const [reviewText, setReviewText] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const { toast } = useToast();
    const { user } = useUser();

    const handleReviewSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await createReview('string' as any, {
                podcastId: podcastId as unknown as Id<'podcasts'>,
                userId: user?.id as unknown as Id<'users'>,
                reviewText: reviewText,
                rating: rating,
                reviewDate: format(new Date(), 'yyyy-MM-dd'),
            });
            toast({
                title: 'New review was created',
                className: 'bg-green-600 text-white font-bold',
                duration: 2000,
            });
        } catch (error: any) {
            console.log('Errror', error);
            toast({
                title: 'Failed to created review',
                className: 'bg-red-600 text-white font-bold',
                duration: 2000,
            });
        }
    };

    return (
        <Dialog>
            <DialogTrigger>
                <Button className='mt-5' variant={'default'}>
                   Add a reference to the podcast
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <Header text='Add a reference to the podcast' />
                    </DialogTitle>
                    <form onSubmit={handleReviewSubmit} className='mt-4'>
                        <Label className='ml-2 text-lg font-bold'>
                            Your comment
                        </Label>
                        <Textarea
                            className='mt-2'
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder='Napíšte sem váš komentár...'
                            required
                        />

                        <div className="mt-6">
                        <Label className='text-lg font-bold'>
                            Stars
                        </Label>
                        <select
                            className='mt-2 p-2 flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'
                            value={rating}
                            onChange={(e) =>
                                setRating(parseInt(e.target.value))
                            }
                            required
                        >
                            <option>How many stars<Star /></option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                        </div>
                        <br />
                        <Button
                            className='mt-4'
                            variant={'secondary'}
                            type='submit'
                        >
                            Add a reference to the podcast
                        </Button>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default PodcastReview;
