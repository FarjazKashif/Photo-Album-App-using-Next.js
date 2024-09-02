'use client';
import React from 'react'
import { CldUploadButton, CldUploadWidget } from 'next-cloudinary';
import { Button } from '../../components/ui/button';
import { useState } from "react";
import { CldImage } from 'next-cloudinary';
import { useRouter } from 'next/navigation';

type iButton = {
    info: {
        public_id: string
    }
}

const UploadButton = () => {
    const router = useRouter()
    return (
        <>
            <Button asChild>
                <div className='flex gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>

                    <CldUploadWidget
                        onSuccessAction={(result: iButton | any) => {
                            console.log(result)
                            setTimeout(() => {
                                router.refresh()
                            }, 1000)
                        }}
                        uploadPreset="dqpy2pmn">
                        {({ open }) => {
                            return (
                                <button onClick={() => open()}>
                                    Upload
                                </button>
                            );

                        }}

                    </CldUploadWidget>
                </div>
            </Button>
        </>
    )
}

export default UploadButton