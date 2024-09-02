import { iCloud } from "@/app/gallery/page"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderPlus } from "lucide-react"
import { use, useState } from "react"
import { createFolder } from "./create-folder"

export default function Dialogbox( {image}: {image: iCloud} ) {
    const [open, setOpen] = useState(false);
    const [albumName, setAlbumName] = useState("")
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost">
                    <FolderPlus className="mr-2 h-4 w-4" />
                    <span>Add to Album</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Album Name</DialogTitle>
                    <DialogDescription>
                        Add a New Album...
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Album" className="text-right">
                            Album
                        </Label>
                        <Input
                            id="album"
                            onChange={(e) => setAlbumName(e.currentTarget.value)}
                            value={albumName}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={async () => {
                        await createFolder(image, albumName)
                        setOpen(false)
                    }} type="submit">Add to Album</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
