'use client';

import { Button } from '@/components/ui/button';
import { FC } from 'react';
import Link from 'next/link';
import { ISidebarLinkProps } from '@/app/_types/appTypes';

const SidebarLink: FC<ISidebarLinkProps> = ({
    icon,
    linkHref,
    linkText,
}: ISidebarLinkProps) => {
    return (
        <div className='ml-2 mt-8'>
            <Button variant={'ghost'} value='sm'>
                {icon}
                <Link className='ml-2 text-xl' href={linkHref}>
                    {linkText}
                </Link>
            </Button>
        </div>
    );
};

export default SidebarLink;
