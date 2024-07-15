'use client';

import { FC } from 'react';
import ThemeButton from '../ThemeButton';
import NavigationSearch from './NavigationSearch';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProfileDropdown from '../../(auth)/ProfileDropdown';

const Navigation: FC = () => {
    const { user } = useUser();
    return (
        <nav className='dark:bg-boxdark sticky top-0 z-50 flex w-full bg-white drop-shadow dark:bg-background dark:drop-shadow-none'>
            <div className='shadow-2 flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11'>
                <div className='hidden sm:block'>
                    <div>
                        <div className='relative'>
                            <button className='absolute left-0 top-1/2 -translate-y-1/2' />
                        </div>
                    </div>
                </div>

                <NavigationSearch />
                <div className='flex items-center gap-3 sm:gap-7'>
                    <ul className='flex items-center gap-2 sm:ml-4 sm:gap-4'>
                        <ThemeButton />
                        {user ? (
                            <ProfileDropdown />
                        ) : (
                            <Button variant={'ghost'} size={'lg'}>
                                <Link className='text-lg' href='/sign-up'>
                                    Sign Up
                                </Link>
                            </Button>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
