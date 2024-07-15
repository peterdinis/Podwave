import { FC } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { PodcastPaginationProps } from '@/app/_types/podcastTypes';

const PodcastPagination: FC<PodcastPaginationProps> = ({
    onNextPage,
    onPreviousPage,
    hasNextPage,
    hasPreviousPage,
    currentPage,
}) => {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href='#'
                        onClick={onPreviousPage}
                        disabled={!hasPreviousPage}
                    />
                </PaginationItem>
                <PaginationItem>
                    <span>{currentPage}</span>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        href='#'
                        onClick={onNextPage}
                        disabled={!hasNextPage}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PodcastPagination;
