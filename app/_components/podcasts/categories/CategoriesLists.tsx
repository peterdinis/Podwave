import { HoverEffect } from '@/components/ui/card-hover-effect';
import { FC } from 'react';
import { projects } from './data';

const CategoriesLists: FC = () => {
    return <HoverEffect items={projects} />;
};

export default CategoriesLists;
