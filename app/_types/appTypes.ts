"use client"

import { ReactNode } from "react";

export interface EmptyStateProps {
    title: string;
    search?: boolean;
    buttonText?: string;
    buttonLink?: string;
}

export interface IAuthWrapperProps {
    children?: ReactNode;
}

export interface IGlobalErrorProps {
    statusCode: string;
    message: string;
    linkHref: string;
    linkText: string;
}

export interface IHeaderProps {
    text: string;
}

export interface ILongTextProps {
    text: string;
    maxLength: number;
}

export interface ITooltipHelperProps {
    icon: ReactNode;
    linkH: string;
    tooltipText: string;
}

export interface ISidebarLinkProps {
    icon: ReactNode;
    linkHref: string;
    linkText: string;
}