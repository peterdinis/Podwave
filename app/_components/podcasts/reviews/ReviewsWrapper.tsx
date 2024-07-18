import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { FC } from 'react';
import StarRating from './StarRating';

const ReviewsWrapper: FC = () => {
    return (
        <>
            <div className='flex flex-col justify-between lg:flex-row'>
                <div className='w-full lg:w-1/3'>
                    <div className='mb-6 flex'>
                        <div>
                            <h5 className='my-1 font-medium'>rrrr</h5>
                            <StarRating />
                            <p className='text-sm opacity-50'>Comment At</p>
                            <p className='mb-0 font-bold'>222.555</p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-2/3'>
                    <p className='mb-6 text-sm leading-normal opacity-75'>
                        rrrrrrrrrrrrrrr
                    </p>
                    <div className='flex justify-end'>
                        <button className='mr-6 inline-flex items-center justify-center rounded px-3 py-2 duration-300 hover:bg-gray-200 hover:text-blue-600 dark:hover:bg-slate-700'>
                            <ThumbsUp className='mr-2 text-lg' />
                            Like 65
                        </button>
                        <button className='inline-flex items-center justify-center rounded px-3 py-2 duration-300 hover:bg-gray-200 hover:text-blue-600 dark:hover:bg-slate-700'>
                            <ThumbsDown className='mr-2 text-lg' />
                            Dislike 4
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewsWrapper;
