import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FC } from 'react';

const ReviewForm: FC = () => {
    return (
        <form className='mt-5'>
            <Label className='ml-2 text-lg font-bold'>Your email</Label>
            <Input className='mt-4' placeholder='Email' />
            <br />
            <Label className='ml-2 text-lg font-bold'>
                Your review comment
            </Label>
            <Textarea className='mt-4' />

            <Button className='mt-5' variant={'secondary'}>
                Add review
            </Button>
        </form>
    );
};

export default ReviewForm;
