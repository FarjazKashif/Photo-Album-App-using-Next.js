"use client"

import React, { useEffect, useState } from 'react'
import UploadImage from '../gallery/Upload-Image'
import { iCloud } from './page'
import { ImageGrid } from '@/Component/masonary-grid'

export function FavoriteList({ initialResources }: { initialResources: iCloud[] }) {

    const [resource, setResources] = useState(initialResources)
    useEffect(() => {
        setResources(initialResources)
    }, [initialResources])
    return (
        <ImageGrid images={resource} getImages={(e) => {
            return (
                <UploadImage
                    key={e.public_id}
                    resultdata={e}
                    width="400"
                    height="300"
                    className="rounded-lg"
                    alt='An'
                    priority
                    onUnHeart={(onUnHeartRes: any) => {
                        setResources((exisres) => exisres.filter((res) => res.public_id !== onUnHeartRes.public_id))
                    }}
                />
            )
        }} />
    )
}