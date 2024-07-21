import { FC } from 'react';
import { Star } from 'lucide-react';
import {
    AccordionItem,
    Accordion,
    AccordionContent,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

interface IReviewsWrapperProps {
    avatar: string;
}

const ReviewsWrapper: FC<IReviewsWrapperProps> = ({avatar}: IReviewsWrapperProps) => {
    const data = useQuery(api.reviews.getAllReviews);

    console.log("D", data);
    return (
        <>
            <Accordion type='single' collapsible>
                <AccordionItem value='reviews'>
                    <AccordionTrigger className='text-xl font-semibold'>
                        Reviews
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='grid gap-6'>
                            <div className='grid gap-4 rounded-lg bg-muted p-4'>
                                <div className='flex items-center gap-4'>
                                    <Avatar>
                                        <AvatarImage
                                            src={avatar}
                                        />
                                    </Avatar>
                                    <div>
                                        <h4 className='font-medium'>
                                            Jane Smith
                                        </h4>
                                        <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                                            <Star className='h-4 w-4 fill-primary' />
                                            <Star className='h-4 w-4 fill-primary' />
                                            <Star className='h-4 w-4 fill-primary' />
                                            <Star className='h-4 w-4 fill-muted stroke-muted-foreground' />
                                            <Star className='h-4 w-4 fill-muted stroke-muted-foreground' />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-muted-foreground'>
                                    I've been listening to this podcast for a
                                    while now and I absolutely love it. The host
                                    is knowledgeable and engaging, and the
                                    topics covered are always relevant and
                                    insightful. Highly recommended for anyone
                                    interested in software development.
                                </p>
                            </div>
                            <div className='grid gap-4 rounded-lg bg-muted p-4'>
                                <div className='flex items-center gap-4'>
                                    <img
                                        src='/placeholder.svg'
                                        alt='Reviewer Avatar'
                                        width={40}
                                        height={40}
                                        className='rounded-full'
                                    />
                                    <div>
                                        <h4 className='font-medium'>
                                            Michael Johnson
                                        </h4>
                                        <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                                            <Star className='h-4 w-4 fill-primary' />
                                            <Star className='h-4 w-4 fill-primary' />
                                            <Star className='h-4 w-4 fill-primary' />
                                            <Star className='h-4 w-4 fill-primary' />
                                            <Star className='h-4 w-4 fill-muted stroke-muted-foreground' />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-muted-foreground'>
                                    This podcast has been a game-changer for me.
                                    The information and insights shared have
                                    really helped me level up my coding skills.
                                    I look forward to each new episode and
                                    highly recommend it to anyone in the
                                    software development field.
                                </p>
                            </div>
                            <div className='grid gap-4 rounded-lg bg-muted p-4'>
                                <div className='flex items-center gap-4'>
                                    <img
                                        src='/placeholder.svg'
                                        alt='Reviewer Avatar'
                                        width={40}
                                        height={40}
                                        className='rounded-full'
                                    />
                                    <div>
                                        <h4 className='font-medium'>
                                            Sarah Lee
                                        </h4>
                                        <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                                            <Star className='h-4 w-4 fill-primary' />
                                            <Star className='h-4 w-4 fill-primary' />
                                            <Star className='h-4 w-4 fill-muted stroke-muted-foreground' />
                                            <Star className='h-4 w-4 fill-muted stroke-muted-foreground' />
                                            <Star className='h-4 w-4 fill-muted stroke-muted-foreground' />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-muted-foreground'>
                                    I've been a bit disappointed with this
                                    podcast. While the host is knowledgeable,
                                    the content can sometimes feel a bit dry and
                                    lacking in practical, actionable advice. I'd
                                    like to see more real-world examples and
                                    case studies in future episodes.
                                </p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default ReviewsWrapper;
