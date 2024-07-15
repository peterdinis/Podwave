'use client';

import { FC, ReactNode } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navigation from '../navigation/Navigation';
import { IDefaultLayoutProps } from '@/app/_types/appTypes';

const DefaultLayout: FC<IDefaultLayoutProps> = ({
    children,
}: IDefaultLayoutProps) => {
    return (
        <div className='flex h-screen overflow-hidden'>
            <Sidebar />

            <section className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
                <Navigation />
                <div className='p-4 md:p-6 2xl:p-10'>{children}</div>
            </section>
        </div>
    );
};

export default DefaultLayout;
