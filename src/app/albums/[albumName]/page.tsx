import React from 'react'
import cloudinary from 'cloudinary'
import Refresh from '@/Component/Refresh'
import { AlbumGrid } from '../../albums/album-grid'
import UploadImage from '@/app/gallery/Upload-Image'

export type iCloud = {
    public_id: string
    tags: string[]
}

export default async function AlbumName({ params: { albumName } }: { params: { albumName: string } }) {
    const result = (await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${albumName}`)
        .sort_by('created_at', 'desc')
        .with_field('tags')
        .max_results(20)
        .execute()) as { resources: iCloud[] }

    return (
        <>
            <Refresh />
            <main className="flex min-h-screen w-full flex-col items-center gap-8">
                <div className="flex justify-between pt-8 px-4 w-full">
                    <h1 className="text-4xl font-bold">Album {albumName}</h1>
                </div>
                <AlbumGrid images={result.resources} getImages={(e) => {
                    return (
                        <UploadImage
                            key={e.public_id}
                            resultdata={e}
                            width="400"
                            height="300"
                            priority
                            className="rounded-lg"
                            alt="An Image of "
                        />
                    )
                }} />

                {/* Delete shadcn through cmd */}


            </main>
        </>
    )
}
