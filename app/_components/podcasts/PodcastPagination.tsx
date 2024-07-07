import { FC } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

interface PodcastPaginationProps {
    onNextPage: () => void;
    hasNextPage: boolean;
}

const PodcastPagination: FC<PodcastPaginationProps> = ({ onNextPage, hasNextPage }) => {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href='#' onClick={onNextPage} disabled={!hasNextPage} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href='#' onClick={onNextPage} disabled={!hasNextPage}>Next</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href='#' onClick={onNextPage} disabled={!hasNextPage} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PodcastPagination;