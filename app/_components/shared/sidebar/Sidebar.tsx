'use client';

import { FC, useState } from 'react';
import classNames from 'classnames';
import { XCircle, Menu, Settings, User, Home, Waves } from 'lucide-react';
import SidebarLink from './SidebarLink';
import TooltipHelper from '../TooltipHelper';
import { FaPodcast } from 'react-icons/fa6';
import { FaRegThumbsUp } from 'react-icons/fa6';
import { BiCategoryAlt } from 'react-icons/bi';

const Sidebar: FC = () => {
    const [collapsed, setSidebarCollapsed] = useState(false);

    return (
        <div
            className={classNames({
                'grid min-h-screen': true,
                'grid-cols-sidebar': !collapsed,
                'grid-cols-sidebar-collapsed': collapsed,
                'transition-[grid-template-columns] duration-300 ease-in-out':
                    true,
            })}
        >
            <div className='bg-gray-200 text-black dark:bg-zinc-800 dark:text-white'>
                <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
                    {collapsed === true ? (
                        <Menu className='h-7 w-7' />
                    ) : (
                        <XCircle className='h-7 w-7' />
                    )}
                </button>
                {collapsed === false ? (
                    <>
                        <span className='prose ml-6 mt-6 flex text-xl font-bold dark:text-white'>
                            <Waves className='ml-3 h-8 w-8' /> Podwave
                        </span>
                        <div>
                            <SidebarLink
                                icon={<FaPodcast className='h-6 w-6' />}
                                linkHref='/'
                                linkText='Home'
                            />

                            <SidebarLink
                                icon={<FaPodcast className='h-6 w-6' />}
                                linkHref='/podcasts/new'
                                linkText='New Podcasts'
                            />
                            <SidebarLink
                                icon={<FaRegThumbsUp className='h-6 w-6' />}
                                linkHref='/podcasts/top'
                                linkText='Top podcasts'
                            />
                            <SidebarLink
                                icon={<BiCategoryAlt className='h-6 w-6' />}
                                linkHref='/podcasts/categories'
                                linkText='Categories'
                            />
                        </div>
                    </>
                ) : (
                    <div>
                        <div className='mt-8'>
                            <Waves className='h-8 w-8' />
                            <div className='mt-8'>
                                <TooltipHelper
                                    icon={<FaPodcast className='h-6 w-6' />}
                                    linkH='/'
                                    tooltipText='Home'
                                />
                            </div>
                            <div className='mt-8'>
                                <TooltipHelper
                                    icon={<FaPodcast className='h-6 w-6' />}
                                    linkH='/podcasts/new'
                                    tooltipText='New Podcasts'
                                />
                            </div>
                            <div className='mt-8'>
                                <TooltipHelper
                                    icon={<FaRegThumbsUp className='h-6 w-6' />}
                                    linkH='/podcasts/top'
                                    tooltipText='Top podcasts'
                                />
                            </div>
                            <div className='mt-8'>
                                <TooltipHelper
                                    icon={<BiCategoryAlt className='h-6 w-6' />}
                                    linkH='/podcasts/categories'
                                    tooltipText='Categories'
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
