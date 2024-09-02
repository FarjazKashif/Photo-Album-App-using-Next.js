import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'

const Header = () => {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center mx-auto px-4 w-full">
                <Image src='/logo.png' width="80" height="80" alt='Logo'></Image>
                <h1 className='font-bold text-xl'>Photo Album</h1>
                <div className="ml-auto flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default Header