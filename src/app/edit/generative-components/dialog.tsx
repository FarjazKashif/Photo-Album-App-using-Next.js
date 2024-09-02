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


export default function DialogboxH( {iniprompt, onSubmit}: {iniprompt: string, onSubmit: (valPrompt: string)=> void} ) {
    const [open, setOpen] = useState(false);
    const [prompt, setPrompt] = useState(iniprompt)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <span>Generative Remove</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Enter a Name that you want to remove.</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Album" className="text-right">
                            Prompt:
                        </Label>
                        <Input
                            id="prompt"
                            onChange={(e) => setPrompt(e.currentTarget.value)}
                            value={prompt}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={async () => {
                        // await createFolder(image, albumName)
                        setOpen(false)
                        onSubmit(prompt)
                    }} type="submit">Enter</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
