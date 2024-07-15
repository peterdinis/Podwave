import { IHeaderProps } from '@/app/_types/appTypes';
import { FC } from 'react';

const Header: FC<IHeaderProps> = ({ text }: IHeaderProps) => {
    return (
        <h2 className='prose-h2: prose ml-4 scroll-m-20 text-4xl font-extrabold tracking-tight dark:text-white lg:text-4xl'>
            {text}
        </h2>
    );
};

export default Header;
