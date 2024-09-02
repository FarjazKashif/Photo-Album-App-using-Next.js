import React, { ReactNode } from 'react'
import cloudinary from 'cloudinary'
import UploadImage from '../app/gallery/Upload-Image'
import Refresh from '@/Component/Refresh'
import { iCloud } from '@/app/gallery/page'

export function ImageGrid({ images, getImages }: {
    images: iCloud[],
    getImages: (data: iCloud) => ReactNode
}) {
    function Grid(columns: number) {
        return images.filter((e, idx) => idx % 5 === columns)

    }
    return (<div className='grid grid-cols-2 gap-4 px-5 pb-5 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-4'>
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
