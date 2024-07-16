import { Button } from "@/components/ui/button";
import { FC } from "react";

const AddToFavorite: FC = () => {
    return (
        <>
            <Button variant={"secondary"} className="ml-5">
                Add to Favorite
            </Button>
        </>
    )
}

export default AddToFavorite