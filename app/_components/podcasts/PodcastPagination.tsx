import { FC } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

interface PodcastPaginationProps {
    onNextPage: () => void;
    onPreviousPage: () => void;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    currentPage: number;
}

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
