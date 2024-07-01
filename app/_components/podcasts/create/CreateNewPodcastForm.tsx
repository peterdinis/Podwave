'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { FC, useEffect, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Loader } from 'lucide-react';
import { Id } from '@/convex/_generated/dataModel';
import { useToast } from '@/components/ui/use-toast';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';
import GeneratePodcast from './GeneratePodcast';
import GenerateThumbnail from './GenerateThumbnail'

const voiceCategories = ['alloy', 'shimmer', 'nova', 'echo', 'fable', 'onyx'];

const formSchema = z.object({
    podcastTitle: z.string().min(2),
    podcastDescription: z.string().min(2),
    categoryId: z.string(),
});

const CreatePodcastForm: FC = () => {
    const router = useRouter();
    const [imagePrompt, setImagePrompt] = useState('');
    const [imageStorageId, setImageStorageId] = useState<Id<'_storage'> | null>(
        null,
    );
    const [imageUrl, setImageUrl] = useState('');
    
    const [audioUrl, setAudioUrl] = useState('');
    const [audioStorageId, setAudioStorageId] = useState<Id<'_storage'> | null>(
        null,
    );
    const [audioDuration, setAudioDuration] = useState(0);

    const [voiceType, setVoiceType] = useState<string | null>(null);
    const [voicePrompt, setVoicePrompt] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);

    const createPodcast = useMutation(api.podcasts.createPodcast);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            podcastTitle: '',
            podcastDescription: '',
            categoryId: '',
        },
    });

    // Fetch categories from the backend
    const categories = useQuery(api.categories.getAllCategories) || [];

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            setIsSubmitting(true);
            if (!audioUrl || !imageUrl || !voiceType) {
                toast({
                    title: 'Please generate audio and image',
                });
                setIsSubmitting(false);
                throw new Error('Please generate audio and image');
            }

            const podcast = await createPodcast({
                podcastTitle: data.podcastTitle,
                podcastDescription: data.podcastDescription,
                audioUrl,
                imageUrl,
                voiceType,
                imagePrompt,
                voicePrompt,
                views: 0,
                audioDuration,
                audioStorageId: audioStorageId!,
                imageStorageId: imageStorageId!,
                categoryId: data.categoryId as unknown as Id<'categories'>,
            });
            console.log('New podcast', podcast);
            toast({ title: 'Podcast created' });
            setIsSubmitting(false);
            router.push('/');
        } catch (error) {
            console.log(error);
            toast({
                title: 'Error',
                variant: 'destructive',
            });
            setIsSubmitting(false);
        }
    }

    return (
        <section className='mt-10 flex flex-col'>
            <h1 className='text-20 font-bold text-white'>Create Podcast</h1>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='mt-12 flex w-full flex-col'
                >
                    <div className='border-black-5 flex flex-col gap-[30px] border-b pb-10'>
                        <FormField
                            control={form.control}
                            name='podcastTitle'
                            render={({ field }) => (
                                <FormItem className='flex flex-col gap-2.5'>
                                    <FormLabel className='text-16 font-bold text-zinc-800 dark:text-white'>
                                        Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className='input-class focus-visible:ring-offset-primary'
                                            placeholder='JSM Pro Podcast'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className='text-zinc-800 dark:text-white' />
                                </FormItem>
                            )}
                        />

                        <div className='flex flex-col gap-2.5'>
                            <Label className='text-16 font-bold text-zinc-800 dark:text-white'>
                                Select AI Voice
                            </Label>

                            <Select
                                onValueChange={(value) => setVoiceType(value)}
                            >
                                <SelectTrigger
                                    className={cn(
                                        'text-16 w-full border-none bg-zinc-200 dark:bg-zinc-800 text-gray-500 focus-visible:ring-offset-primary',
                                    )}
                                >
                                    <SelectValue
                                        placeholder='Select AI Voice'
                                        className='placeholder:text-gray-500'
                                    />
                                </SelectTrigger>
                                <SelectContent className='text-16 text-white- focus:ring-primary border-none bg-zinc-200 dark:bg-zinc-800 font-bold'>
                                    {voiceCategories.map((category) => (
                                        <SelectItem
                                            key={category}
                                            value={category}
                                            className='focus:bg-primary capitalize'
                                        >
                                            {category}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                                {voiceType && (
                                    <audio
                                        src={`/${voiceType}.mp3`}
                                        autoPlay
                                        className='hidden'
                                    />
                                )}
                            </Select>
                        </div>

                        <FormField
                            control={form.control}
                            name='podcastDescription'
                            render={({ field }) => (
                                <FormItem className='flex flex-col gap-2.5'>
                                    <FormLabel className='text-16 text-zinc-800 dark:text-white font-bold'>
                                        Description
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className='input-class focus-visible:ring-offset-primary'
                                            placeholder='Write a short podcast description'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className='text-zinc-800 dark:text-white' />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='categoryId'
                            render={({ field }) => (
                                <FormItem className='flex flex-col gap-2.5'>
                                    <FormLabel className='text-16 text-zinc-800 dark:text-white font-bold'>
                                        Category
                                    </FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange}>
                                            <SelectTrigger
                                                className={cn(
                                                    'text-16 text-gray-500 focus-visible:ring-offset-primary w-full border-none bg-zinc-200 dark:bg-zinc-800',
                                                )}
                                            >
                                                <SelectValue
                                                    placeholder='Select Category'
                                                    className='placeholder:text-gray-500'
                                                />
                                            </SelectTrigger>
                                            <SelectContent className='text-16 text-white focus:ring-primary border-none bg-zinc-200 dark:bg-zinc-800 font-bold'>
                                                {categories.map((category) => (
                                                    <SelectItem
                                                        key={category._id}
                                                        value={category._id}
                                                        className='focus:bg-primary capitalize'
                                                    >
                                                        {category.categoryName}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage className='text-zinc-800 dark:text-white' />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className='flex flex-col pt-10'>
                        <GeneratePodcast
                            setAudioStorageId={setAudioStorageId}
                            setAudio={setAudioUrl}
                            voiceType={voiceType!}
                            audio={audioUrl}
                            voicePrompt={voicePrompt}
                            setVoicePrompt={setVoicePrompt}
                            setAudioDuration={setAudioDuration}
                        />

                        <GenerateThumbnail
                            setImage={setImageUrl}
                            setImageStorageId={setImageStorageId}
                            image={imageUrl}
                            imagePrompt={imagePrompt}
                            setImagePrompt={setImagePrompt}
                        />

                        <div className='mt-10 w-full'>
                            <Button
                                type='submit'
                                className='text-16 bg-primary text-white w-full py-4 font-extrabold transition-all duration-500'
                            >
                                {isSubmitting ? (
                                    <>
                                        Submitting
                                        <Loader
                                            size={20}
                                            className='ml-2 animate-spin'
                                        />
                                    </>
                                ) : (
                                    'Submit & Publish Podcast'
                                )}
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </section>
    );
};

export default CreatePodcastForm;