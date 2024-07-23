'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Loader, Upload } from 'lucide-react';
import Image from 'next/image';
import { useAction, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { v4 as uuidv4 } from 'uuid';
import { useUploadFiles } from '@/app/_hooks/useUploadFiles';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@radix-ui/react-dropdown-menu';

const GenerateThumbnail = ({
    setImage,
    setImageStorageId,
    image,
    imagePrompt,
    setImagePrompt,
}: any) => {
    const [isAiThumbnail, setIsAiThumbnail] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(false);
    const imageRef = useRef<HTMLInputElement>(null);
    const { toast } = useToast();
    const generateUploadUrl = useMutation(api.files.generateUploadUrl);
    const { startUpload } = useUploadFiles(generateUploadUrl);
    const getImageUrl = useMutation(api.podcasts.getUrl);
    const handleGenerateThumbnail = useAction(
        api.openai.generateThumbnailAction,
    );

    const handleImage = async (blob: Blob, fileName: string) => {
        setIsImageLoading(true);
        setImage('');

        try {
            const file = new File([blob], fileName, { type: 'image/png' });

            const uploaded = await startUpload([file]);
            const storageId = (uploaded[0].response as any).storageId;

            setImageStorageId(storageId);

            const imageUrl = await getImageUrl({ storageId });
            setImage(imageUrl!);
            setIsImageLoading(false);
            toast({
                title: 'Thumbnail generated successfully',
            });
        } catch (error) {
            console.log(error);
            toast({
                title: 'Error generating thumbnail',
                variant: 'destructive',
            });
        }
    };

    const generateImage = async () => {
        try {
            const response = await handleGenerateThumbnail({
                prompt: imagePrompt,
            });
            const blob = new Blob([response], { type: 'image/png' });
            handleImage(blob, `thumbnail-${uuidv4()}`);
        } catch (error) {
            console.log(error);
            toast({
                title: 'Error generating thumbnail',
                variant: 'destructive',
            });
        }
    };
    const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        try {
            const files = e.target.files;
            if (!files) return;
            const file = files[0];
            const blob = await file.arrayBuffer().then((ab) => new Blob([ab]));

            handleImage(blob, file.name);
        } catch (error) {
            console.log(error);
            toast({ title: 'Error uploading image', variant: 'destructive' });
        }
    };

    return (
        <>
            <div className='generate_thumbnail'>
                <Button
                    type='button'
                    variant='default'
                    onClick={() => setIsAiThumbnail(true)}
                    className={cn('', {
                        'bg-primary': isAiThumbnail,
                    })}
                >
                    Use AI to generate thumbnail
                </Button>
                <Button
                    type='button'
                    variant='secondary'
                    onClick={() => setIsAiThumbnail(false)}
                    className={cn('ml-4 mt-5 bg-gray-600', {
                        'bg-secondary': !isAiThumbnail,
                    })}
                >
                    Upload custom image
                </Button>
            </div>
            {isAiThumbnail ? (
                <div className='flex flex-col gap-5'>
                    <div className='mt-5 flex flex-col gap-2.5'>
                        <Label className='text-16 font-bold text-white'>
                            AI Prompt to generate Thumbnail
                        </Label>
                        <Textarea
                            className='input-class font-light focus-visible:ring-offset-primary'
                            placeholder='Provide text to generate thumbnail'
                            rows={5}
                            value={imagePrompt}
                            onChange={(e) => setImagePrompt(e.target.value)}
                        />
                    </div>
                    <div className='w-full max-w-[200px]'>
                        <Button
                            type='submit'
                            className='text-16 bg-primary py-4 font-bold text-white'
                            onClick={generateImage}
                        >
                            {isImageLoading ? (
                                <>
                                    Generating
                                    <Loader
                                        size={20}
                                        className='ml-2 animate-spin'
                                    />
                                </>
                            ) : (
                                'Generate'
                            )}
                        </Button>
                    </div>
                </div>
            ) : (
                <div
                    className='image_div'
                    onClick={() => imageRef?.current?.click()}
                >
                    <Input
                        type='file'
                        className='hidden'
                        ref={imageRef}
                        onChange={(e) => uploadImage(e)}
                    />
                    {!isImageLoading ? (
                        <Upload 
                            className='mt-5'
                            size={40}
                        />
                    ) : (
                        <div className='text-16 flex-center text-white font-medium'>
                            Uploading
                            <Loader size={20} className='ml-2 animate-spin' />
                        </div>
                    )}
                    <div className='flex flex-col items-center gap-1'>
                        <h2 className='text-12 text-black font-bold'>
                            Click to upload
                        </h2>
                        <p className='text-12 text-gray-1 font-normal'>
                            SVG, PNG, JPG, or GIF (max. 1080x1080px)
                        </p>
                    </div>
                </div>
            )}
            {image && (
                <div className='flex-center w-full'>
                    <Image
                        src={image}
                        width={200}
                        height={200}
                        className='mt-5'
                        alt='thumbnail'
                    />
                </div>
            )}
        </>
    );
};

export default GenerateThumbnail;
