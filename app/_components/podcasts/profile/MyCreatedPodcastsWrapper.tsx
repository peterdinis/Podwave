import { FC } from 'react';
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from '@/components/ui/table';

const MyCreatedPodcastsWrapper: FC = () => {
    return (
        <div className='w-full max-w-4xl rounded-lg border'>
            <div className='relative max-h-[400px] w-full overflow-auto'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Podcast</TableHead>
                            <TableHead>Host</TableHead>
                            <TableHead className='text-right'>
                                Episodes
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className='font-medium'>
                                The Joe Rogan Experience
                            </TableCell>
                            <TableCell>Joe Rogan</TableCell>
                            <TableCell className='text-right'>1,800+</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-medium'>
                                The Daily
                            </TableCell>
                            <TableCell>Michael Barbaro</TableCell>
                            <TableCell className='text-right'>2,000+</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-medium'>
                                My Favorite Murder
                            </TableCell>
                            <TableCell>
                                Karen Kilgariff, Georgia Hardstark
                            </TableCell>
                            <TableCell className='text-right'>300+</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-medium'>
                                The Tim Ferriss Show
                            </TableCell>
                            <TableCell>Tim Ferriss</TableCell>
                            <TableCell className='text-right'>600+</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-medium'>
                                Armchair Expert
                            </TableCell>
                            <TableCell>Dax Shepard</TableCell>
                            <TableCell className='text-right'>400+</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-medium'>
                                The Ezra Klein Show
                            </TableCell>
                            <TableCell>Ezra Klein</TableCell>
                            <TableCell className='text-right'>500+</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-medium'>
                                Stuff You Should Know
                            </TableCell>
                            <TableCell>Josh Clark, Chuck Bryant</TableCell>
                            <TableCell className='text-right'>1,500+</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-medium'>
                                The Breakfast Club
                            </TableCell>
                            <TableCell>
                                Charlamagne Tha God, DJ Envy, Angela Yee
                            </TableCell>
                            <TableCell className='text-right'>2,000+</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default MyCreatedPodcastsWrapper;
