'use client';

import { ISuspenseWrapperProps } from '@/app/_types/appTypes';
import { Loader2 } from 'lucide-react';
import { FC, Suspense } from 'react';

const SuspenseWrapper: FC<ISuspenseWrapperProps> = ({
    children,
}: ISuspenseWrapperProps) => {
    return (
        <Suspense fallback={<Loader2 className='h-8 w-8 animate-spin' />}>
            {children}
        </Suspense>
    );
};

export default SuspenseWrapper;
