"use client"

import { FC } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import DefaultLayout from "../../shared/layouts/DefaultLayout";
import Header from "../../shared/Header";

const CategoryInfo: FC = () => {
    
    const {id} = useParams();

    const data = useQuery(api.categories.getCategoryById, {
        categoryId: id[0] as unknown as Id<"categories">
    });

    return (
        <DefaultLayout>
            <Header text={data?.categoryName as unknown as string} />
            <hr className="mt-4" />
            <div className="mt-5 font-bold text-xl">
                Podcasty v tejto kategórií
            </div>
            <div className="mt-3">
              TO BE ADDED SOON
            </div>
        </DefaultLayout>
    )
}

export default CategoryInfo;