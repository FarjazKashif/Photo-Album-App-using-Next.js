import React from 'react'
import UploadButton from '../../Component/Upload-button'
import cloudinary from 'cloudinary'
import UploadImage from '../gallery/Upload-Image'
import Refresh from '@/Component/Refresh'
import { FavoriteList } from './favorite-list'

export type iCloud = {
    public_id: string
    tags: string[]
}

export default async function Favorite() {
    const result = (await cloudinary.v2.search
        .expression('resource_type:image AND tags=favorite')
        .sort_by('created_at', 'desc')
        .with_field('tags')
        .max_results(20)
        .execute()) as { resources: iCloud[] }

    return (
        <>
            <Refresh />
            <main className="flex min-h-screen w-full flex-col items-center gap-8">
                <div className="flex justify-between pt-8 px-4 w-full">
                    <h1 className="text-4xl font-bold">Favorite Images</h1>
                </div>

                <FavoriteList initialResources={result.resources}/>

                {/* Delete shadcn through cmd */}


            </main>
        </>
    )
}
