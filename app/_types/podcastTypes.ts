import { Id } from '@/convex/_generated/dataModel';
import { Dispatch, Key, SetStateAction } from 'react';

export interface GeneratePodcastProps {
    voiceType: string;
    setAudio: Dispatch<SetStateAction<string>>;
    audio: string;
    setAudioStorageId: Dispatch<SetStateAction<Id<'_storage'> | null>>;
    voicePrompt: string;
    setVoicePrompt: Dispatch<SetStateAction<string>>;
    setAudioDuration: Dispatch<SetStateAction<number>>;
}

export interface Podcast {
    isOwner: boolean | string;
    audioDuration: number;
    audioStorageId: string;
    audioUrl: string;
    author: string;
    authorId: string;
    authorImageUrl: string;
    categoryId: string;
    imagePrompt: string;
    imageStorageId: string;
    imageUrl: string;
    podcastDescription: string;
    podcastTitle: string;
    user: string;
    views: number;
    voicePrompt: string;
    voiceType: string;
    _creationTime: number;
    podcastId: Id<'podcasts'>;
    _id: Id<'podcasts'>;
    createdAt?: Date | string;
}

export type PodcastType = Partial<Podcast>;


export interface PodcastPaginationProps {
    onNextPage: () => void;
    onPreviousPage: () => void;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    currentPage: number;
}

export interface PodcastCardProps {
    podcast: PodcastType;
}

export interface PodcastReviewProps {
    podcastId: string;
}

export interface NavigationPodcast {
    _id: Key;
    podcastTitle: string;
}