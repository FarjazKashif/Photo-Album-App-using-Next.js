import React from 'react'
import UploadButton from '../../Component/Upload-button'
import cloudinary from 'cloudinary'
import UploadImage from './Upload-Image'
import Refresh from '@/Component/Refresh'
import { ImageGrid } from '@/Component/masonary-grid'
import SearchForm from './search-form'

export type iCloud = {
  public_id: string
  tags: string[]
}

export default async function Gallery({ searchParams: {search} }: { searchParams: {search: string}}) {
  const result = (await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}`: ""}`)
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(20)
    .execute()) as { resources: iCloud[] }

  return (
    <>
      <Refresh />
      <main className="flex min-h-screen w-full flex-col items-center gap-8">
        <div className="lg:flex justify-between pt-8 px-4 w-full">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <SearchForm iniSearch={search} />
          <UploadButton />
        </div>
        <ImageGrid images={result.resources} getImages={(e) => {
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
