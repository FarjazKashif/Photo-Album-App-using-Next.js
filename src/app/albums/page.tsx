import React from 'react'
import cloudinary from 'cloudinary'
import Refresh from '@/Component/Refresh'
import { ImageGrid } from '@/Component/masonary-grid'
import { AlbumCard } from './album-card'

export type Folder = {
    name: string, path: string
}

export default async function AlbumPage() {
    const result = (await cloudinary.v2.api.root_folders()) as { folders: Folder[] }
    // console.log(result)

    return (
        <>
            <Refresh />
            <main className="flex min-h-screen w-full flex-col items-center gap-8">
                <div className="flex justify-between pt-8 px-4 w-full">
                    <h1 className="text-4xl font-bold">Albums</h1>
                </div>

                <div className='grid grid-cols-3 gap-4'>
                    {result.folders.map((e) => (
                        <AlbumCard key={e.path} folders={e} />
                    ))}
                </div>
            </main>
        </>
    )
}
