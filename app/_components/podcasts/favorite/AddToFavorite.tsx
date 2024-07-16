import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface IAddToFavoriteProps {
  podcastId: Id<"podcasts">
}

const AddToFavorite: FC<IAddToFavoriteProps> = ({ podcastId }: IAddToFavoriteProps) => {
  const { toast } = useToast();
  const addFavorite = useMutation(api.podcasts.addToFavorites);

  const addToFavorite = async () => {
    try {
      await addFavorite({ podcastId });
      toast({
        title: "Podcast was added to favorite",
        duration: 2000,
        className: "bg-green-600 text-white font-bold"
      });
    } catch (error) {
      toast({
        title: "Error adding podcast to favorites",
        duration: 2000,
        className: "bg-red-600 text-white font-bold"
      });
    }
  };

  return (
    <>
      <Button onClick={addToFavorite} variant={"secondary"} className="ml-5">
        Add to Favorite
      </Button>
    </>
  );
};

export default AddToFavorite;