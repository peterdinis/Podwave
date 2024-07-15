import React from 'react';
import Link from 'next/link';
import { EmptyStateProps } from '@/app/_types/appTypes';
import { Button } from '@/components/ui/button';
import { PiEmpty } from 'react-icons/pi';
import { Search } from 'lucide-react';

const EmptyState = ({
    title,
    search,
    buttonLink,
    buttonText,
}: EmptyStateProps) => {
    return (
        <section className='flex-center size-full flex-col gap-3'>
            <PiEmpty className='h-20 w-20' />
            <div className='flex-center w-full max-w-[254px] flex-col gap-3'>
                <h1 className='text-16 text-white-1 text-center font-medium'>
                    {title}
                </h1>
                {search && (
                    <p className='text-16 text-white-2 text-center font-medium'>
                        Try adjusting your search to find what you are looking
                        for
                    </p>
                )}
                {buttonLink && (
                    <Button className='bg-orange-1'>
                        <Link href={buttonLink} className='flex gap-1'>
                            <Search className='h-10 w-10' />
                            <h1 className='text-16 text-white-1 font-extrabold'>
                                {buttonText}
                            </h1>
                        </Link>
                    </Button>
                )}
            </div>
        </section>
    );
};

export default EmptyState;
