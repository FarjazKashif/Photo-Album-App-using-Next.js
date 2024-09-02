import React from 'react'
import { Button } from '../../../components/ui/button'
import { cn } from '@/lib/utils'
import { Heart } from '../icons/Heart'
import Link from 'next/link'
import { AlbumIcon } from '../icons/album'
import { Folder } from '@/app/albums/page'
import cloudinary from 'cloudinary'

export default async function SideMenu() {
    const result = (await cloudinary.v2.api.root_folders()) as { folders: Folder[] }
    return (
        <div className="pb-12 mx-auto">
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Discover
                    </h2>
                    <div className="space-y-1">
                        <Button variant="ghost" className="w-full justify-start flex gap-5 items-center" asChild>
                            <Link href={'/gallery'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>

                                Gallery
                            </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start flex gap-5 items-center" asChild>
                            <Link href={'/favorite'}>
                                <Heart />
                                Favorites
                            </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start flex gap-5 items-center" asChild>
                            <Link href={'/albums'}>
                                <AlbumIcon />
                                Albums
                            </Link>
                        </Button>
                        {result.folders.map((e) => (
                            <Button variant="ghost" className='w-full justify-start flex gap-5 items-center border-b-2' asChild key={e.path}><Link className='pl-16' href={`/albums/${e.name}`}>{e.name}</Link></Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}