import React, { ReactNode } from 'react'
import cloudinary from 'cloudinary'
import Refresh from '@/Component/Refresh'
import { iCloud } from '@/app/gallery/page'

export function AlbumGrid({ images, getImages }: {
    images: iCloud[],
    getImages: (data: iCloud) => ReactNode
}) {
    function Grid(columns: number) {
        return images.filter((e, idx) => idx % 5 === columns)

    }
    return (<div className='grid grid-cols-4 gap-4 px-5 pb-5'>
        {[
            Grid(0),
            Grid(1),
            Grid(2),
            Grid(3),
        ].map((e, idx) => (
            <div key={idx} className='flex flex-col gap-4'>
                {e.map(getImages)}
            </div>
        ))}
    </div>
    )
}
