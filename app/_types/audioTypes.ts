import { Dispatch, SetStateAction } from 'react';

export interface AudioProps {
    title: string;
    audioUrl: string;
    author: string;
    imageUrl: string;
    podcastId: string;
}

export interface AudioContextType {
    audio: AudioProps | undefined;
    setAudio: Dispatch<SetStateAction<AudioProps | undefined>>;
}
