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


export default function DialogboxColor({ iniprompt, colorprompt, onSubmit }: { iniprompt: string, colorprompt: string, onSubmit: (valPrompt: string, valPrompt2: string) => void }) {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState(colorprompt)
    const [thing, setThing] = useState(iniprompt)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <span>Generative Color</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Enter a Name that you want to remove.</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="color" className="text-right">
                            Color:
                        </Label>
                        <Input
                            id="color"
                            onChange={(e) => setColor(e.currentTarget.value)}
                            value={color}
                            className="col-span-3"
                        />
                        <Label htmlFor="thing" className="text-right">
                            Thing:
                        </Label>
                        <Input
                            id="thing"
                            onChange={(e) => setThing(e.currentTarget.value)}
                            value={thing}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={async () => {
                        // await createFolder(image, albumName)
                        setOpen(false)
                        onSubmit(color, thing)
                    }} type="submit">Enter</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
