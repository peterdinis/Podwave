import {FC, ReactNode} from "react";

interface IAuthWrapperProps {
    children?: ReactNode;
}

const AuthWrapper: FC<IAuthWrapperProps> = ({children}: IAuthWrapperProps) => {
    return (
        <div className="flex justify-center align-top mt-10">
            {children}
        </div>
    )
}

export default AuthWrapper