'use client';

import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2 } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Id } from "@/convex/_generated/dataModel"
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';

const voiceCategories = ['alloy', 'shimmer', 'nova', 'echo', 'fable', 'onyx'];

const formSchema = z.object({
    podcastTitle: z.string().min(2),
    podcastDescription: z.string().min(2),
});

const CreateNewPodcastForm: FC = () => {
    const router = useRouter()
  const [imagePrompt, setImagePrompt] = useState('');
  const [imageStorageId, setImageStorageId] = useState<Id<"_storage"> | null>(null)
  const [imageUrl, setImageUrl] = useState('');
  
  const [audioUrl, setAudioUrl] = useState('');
  const [audioStorageId, setAudioStorageId] = useState<Id<"_storage"> | null>(null)
  const [audioDuration, setAudioDuration] = useState(0);
  
  const [voiceType, setVoiceType] = useState<string | null>(null);
  const [voicePrompt, setVoicePrompt] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createPodcast = useMutation(api.podcasts.createPodcast)

  const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            podcastTitle: '',
            podcastDescription: '',
        },
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
          setIsSubmitting(true);
          if(!audioUrl || !imageUrl || !voiceType) {
            toast({
              title: 'Please generate audio and image',
            })
            setIsSubmitting(false);
            throw new Error('Please generate audio and image')
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
          })
          toast({ title: 'Podcast created' })
          setIsSubmitting(false);
          router.push('/')
        } catch (error) {
          console.log(error);
          toast({
            title: 'Error',
            variant: 'destructive',
          })
          setIsSubmitting(false);
        }
      }

    return (
        <section className='mt-10 flex flex-col'>
            <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 flex w-full flex-col">
          <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10">
            <FormField
              control={form.control}
              name="podcastTitle"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <FormLabel className="text-16 font-bold text-black dark:text-white">Title</FormLabel>
                  <FormControl>
                    <Input className="input-class focus-visible:ring-offset-orange-1" placeholder="JSM Pro Podcast" {...field} />
                  </FormControl>
                  <FormMessage className="text-black dark:text-white" />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-2.5">
              <Label className="text-16 font-bold text-black dark:text-white">
                Select AI Voice
              </Label>

              <Select onValueChange={(value) => setVoiceType(value)}>
                <SelectTrigger className={cn('text-16 w-full border-none bg-gray-100 dark:bg-gray-800 text-gray focus-visible:ring-offset-orange')}>
                  <SelectValue placeholder="Select AI Voice" className="placeholder:text-gray " />
                </SelectTrigger>
                <SelectContent className="text-16 border-none bg-gray-100 dark:bg-background font-bold text-black dark:text-white focus:ring-orange">
                  {voiceCategories.map((category) => (
                    <SelectItem key={category} value={category} className="capitalize focus:bg-orange">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <FormField
              control={form.control}
              name="podcastDescription"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <FormLabel className="text-16 font-bold text-black dark:text-white">Description</FormLabel>
                  <FormControl>
                    <Textarea className="input-class focus-visible:ring-offset-orange" placeholder="Write a short podcast description" {...field} />
                  </FormControl>
                  <FormMessage className="text-black dark:text-white" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col pt-10">
              <div className="mt-10 w-full">
                <Button variant={"default"} type="submit" className="text-16 w-full bg-orange py-4 font-extrabold text-white transition-all duration-500 hover:bg-black">
                  {isSubmitting ? (
                    <>
                      Submitting
                      <Loader2 size={20} className="animate-spin ml-2" />
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

export default CreateNewPodcastForm;
