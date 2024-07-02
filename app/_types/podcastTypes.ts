import { Id } from '@/convex/_generated/dataModel';
import { Dispatch, SetStateAction } from 'react';

export interface GeneratePodcastProps {
    voiceType: string;
    setAudio: Dispatch<SetStateAction<string>>;
    audio: string;
    setAudioStorageId: Dispatch<SetStateAction<Id<'_storage'> | null>>;
    voicePrompt: string;
    setVoicePrompt: Dispatch<SetStateAction<string>>;
    setAudioDuration: Dispatch<SetStateAction<number>>;
}

interface Podcast {
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
    _id: Id<"podcasts">
}

export type PodcastType = Partial<Podcast>;