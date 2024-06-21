import { FC } from 'react';

interface IHeaderProps {
    text: string;
}

const Header: FC<IHeaderProps> = ({ text }: IHeaderProps) => {
    return (
        <h2 className='prose-h2: prose scroll-m-20 text-2xl font-extrabold tracking-tight dark:text-white lg:text-4xl'>
            {text}
        </h2>
    );
};

export default Header;
