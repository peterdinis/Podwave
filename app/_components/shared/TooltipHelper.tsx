'use client';

import { ITooltipHelperProps } from '@/app/_types/appTypes';
import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { FC } from 'react';

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
