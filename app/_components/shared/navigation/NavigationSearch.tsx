import { Input } from '@/components/ui/input';
import { FC } from 'react';

const NavigationSearch: FC = () => {
    return (
        <Input
            className='
                w-full
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
                lg:text-sm
            '
            type='text'
            placeholder='Search'
        />
    );
};

export default NavigationSearch;