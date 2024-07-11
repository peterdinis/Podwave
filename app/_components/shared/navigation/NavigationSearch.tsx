"use client"

import { FC, useState, ChangeEvent } from 'react';
import { usePathname } from 'next/navigation'
import { Input } from '@/components/ui/input';

const NavigationSearch: FC = () => {
    const pathname = usePathname()
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        if (pathname === '/') {
            console.log('Vyhľadávam v podcasts: ', event.target.value);
        } else if (pathname === '/categories') {
            console.log('Vyhľadávam v kategóriách: ', event.target.value);
        }
    };

    return (
        <Input
         className=' w-full
                sm:w-10/12
                md:w-8/12
                lg:w-6/12
                xl:w-4/12
                rounded-full
                bg-gray-100
                py-2
                pl-4
                text-xs
                font-bold
                uppercase
                leading-tight
                text-gray-700
                focus:outline-none
                focus:shadow-outline
                lg:text-sm'
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={handleSearch}
        />
    );
};

export default NavigationSearch;