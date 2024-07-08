'use client';

import { Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@radix-ui/react-dropdown-menu';
import { GeneratePodcastProps } from '@/app/_types/podcastTypes';
import { useGeneratePodcast } from '@/app/_hooks/useGeneratePodcast';

const GeneratePodcast = (props: GeneratePodcastProps) => {
    const { isGenerating, generatePodcast } = useGeneratePodcast(props);

    return (
        <div>
            <div className='flex flex-col gap-2.5'>
                <Label className='text-16 font-bold text-zinc-800 dark:text-white'>
                    AI Prompt to generate Podcast
                </Label>
                <Textarea
                    className='input-class font-light focus-visible:ring-offset-primary'
                    placeholder='Provide text to generate audio'
                    rows={5}
                    value={props.voicePrompt}
                    onChange={(e) => props.setVoicePrompt(e.target.value)}
                />
            </div>
            <div className='mt-5 w-full max-w-[200px]'>
                <Button
                    type='submit'
                    className='text-16 bg-primary py-4 font-bold text-white'
                    onClick={generatePodcast}
                >
                    {isGenerating ? (
                        <>
                            Generating
                            <Loader size={20} className='ml-2 animate-spin' />
                        </>
                    ) : (
                        'Generate'
                    )}
                </Button>
            </div>
            {props.audio && (
                <audio
                    controls
                    src={props.audio}
                    autoPlay
                    className='mt-5'
                    onLoadedMetadata={(e) =>
                        props.setAudioDuration(e.currentTarget.duration)
                    }
                />
            )}
        </div>
    );
};

export default GeneratePodcast;
