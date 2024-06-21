'use client';

import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface ITooltipHelperProps {
    icon: ReactNode;
    linkH: string;
    tooltipText: string;
}

const TooltipHelper: FC<ITooltipHelperProps> = ({
    icon,
    linkH,
    tooltipText,
}: ITooltipHelperProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Button variant={'ghost'} size={'sm'}>
                        <Link href={linkH}>{icon}</Link>
                        <TooltipContent>{tooltipText}</TooltipContent>
                    </Button>
                </TooltipTrigger>
            </Tooltip>
        </TooltipProvider>
    );
};

export default TooltipHelper;
