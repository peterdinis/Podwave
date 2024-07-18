import { FC } from 'react';
import StarRating from './StarRating';

const ReviewsWrapper: FC = () => {
    return (
        <>
            <h3 className='mt-5 prose prose-h3: text-lg font-bold dark:text-blue-100'>Reviews</h3>
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
                </div>
            </div>
        </>
    );
};

export default ReviewsWrapper;
