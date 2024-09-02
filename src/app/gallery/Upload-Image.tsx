"use client"

import { CldImage, CldImageProps } from 'next-cloudinary';
import { Heart } from '../../Component/icons/Heart';
import { FullHeart } from '../../Component/icons/Full-Heart';
import { MarkasFavorite } from '@/app/gallery/action';
import { useState, useTransition } from 'react';
import { iCloud } from './page'
import { useRouter } from 'next/navigation';
import { MenuItem } from '@/Component/menu-dialog';


const UploadImage = (props: { onUnHeart?: (onUnHeartRes: iCloud) => void, resultdata: iCloud,} & Omit<CldImageProps, "src">) => {
    const { resultdata, onUnHeart } = props

    const [Transition, setTransition] = useTransition()

    const router = useRouter()
    const [isFav, setIsFav] = useState(resultdata.tags.includes("favorite"))


    return (
        <div className='relative'>
            <CldImage {...props} src={resultdata.public_id} />
            {isFav ?
                <FullHeart className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
                    onClick={() => {
                        onUnHeart?.(resultdata)
                        setIsFav(false)
                        setTransition(() => {
                            MarkasFavorite(resultdata.public_id, false)
                        })
                    }}
                />
                :
                <Heart className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"
                    onClick={() => {
                        onUnHeart?.(resultdata)
                        setTransition(() => {
                            setIsFav(true)
                            MarkasFavorite(resultdata.public_id, true)
                        })
                    }}
                />
            }
            <MenuItem image={resultdata}/>
        </div>
    )
}

export default UploadImage