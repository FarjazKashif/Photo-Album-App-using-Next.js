import { User, Menu, FolderPlus, PencilIcon, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { iCloud } from "@/app/gallery/page"
import Dialogbox from "./open-dialog"
import Link from "next/link"
import { useState } from "react"
import { DeleteImage } from "./delete"

export function MenuItem({image}: {image: iCloud}) {
    const [isDeleting, setIsDeleting] = useState<iCloud | boolean>(image);

    const handleDelete = () => {
        // setIsDeleting(true);
    }


    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="p-0 w-8 h-7"><Menu className="h-6" /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuItem asChild>
                        <Dialogbox image={image}/>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer pl-4">
                        <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}><PencilIcon className="mr-2 w-4 h-4"/> Edit</Link>
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem asChild className="cursor-pointer justify-start pl-4" >
                        <Button variant="ghost" className="w-full hover:outline-none"><Trash className="mr-2 w-4 h-4"/>Trash</Button>
                    </DropdownMenuItem> */}
                    
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
