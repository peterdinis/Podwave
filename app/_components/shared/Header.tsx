import { FC } from "react";

interface IHeaderProps {
    text: string;
}

const Header: FC<IHeaderProps> = ({text}: IHeaderProps) => {
    return (
        <h2 className="scroll-m-20 prose prose-h2: text-2xl font-extrabold tracking-tight lg:text-5xl">
            {text}
        </h2>
    )
}

export default Header;