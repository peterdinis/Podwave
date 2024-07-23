'use client';

import { FC, Key } from 'react';
import { Loader2, Star } from 'lucide-react';
import {
    AccordionItem,
    Accordion,
    AccordionContent,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@clerk/nextjs';
import { ReviewType } from '@/app/_types/reviewTypes';

const ReviewsWrapper: FC = () => {
    const data = useQuery(api.reviews.getAllReviews);

    return (
        <Accordion type='single' collapsible>
            <AccordionItem value='reviews'>
                <AccordionTrigger className='text-xl font-semibold'>
                    Reviews
                </AccordionTrigger>
                <AccordionContent>
                    <div className='grid gap-6'>
                        {data?.reviews &&
                            data.reviews.map((item) => (
                                <ReviewItem key={item._id} review={item} />
                            ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

const ReviewItem: FC<{ review: ReviewType }> = ({ review }) => {
    const user = useUser();
    const userQuery = useQuery(api.users.getUserById, {
        clerkId: user.user!.id,
    });

    if (!userQuery) {
        return <Loader2 className='h-8 w-8 animate-spin' />;
    }

    const appUser = userQuery;

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
                <Avatar>
                    <AvatarImage src={appUser.imageUrl} />
                    <AvatarFallback>{user.user!.fullName}</AvatarFallback>
                </Avatar>
                <div>
                    <h4 className='font-medium'>{appUser.name}</h4>
                    <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                        {[...Array(5)].map(
                            (_: unknown, index: Key | null | undefined) => (
                                <Star
                                    key={index}
                                    className={`h-4 w-4 ${index! < review.rating ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`}
                                />
                            ),
                        )}
                    </div>
                </div>
            </div>
            <p className='text-muted-foreground'>{review.reviewText}</p>
            <p className='text-muted-foreground'>
                {format(review._creationTime, 'yyyy-MM-dd')}
            </p>
        </div>
    );
};

export default ReviewsWrapper;
