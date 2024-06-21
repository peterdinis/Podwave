import { FC } from 'react';

const NavigationSearch: FC = () => {
    return (
        <input
            className='focus:shadow-outline w-9/12 rounded-full bg-gray-100 py-4 pl-4 text-xs font-bold uppercase leading-tight text-gray-700 focus:outline-none lg:text-sm'
            type='text'
            placeholder='Search'
        />
    );
};

export default NavigationSearch;
