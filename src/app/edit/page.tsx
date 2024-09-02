"use client"

import { Button } from "@/components/ui/button"
import { CldImage } from "next-cloudinary"
import { useState } from "react"
import Dialogbox from "./generative-components/dialog"
import DialogboxH from "./generative-components/dialog"
import DialogboxColor from "./generative-components/recolor-dialog"

export default function EditPage({ searchParams: { publicId } }: { searchParams: { publicId: string } }) {
    // console.log(props)
    const [image, setImage] = useState<undefined | "generative-fill" | "restore" | "generative-remove" | "blur" | "generative-color" | "remove-background">()

    const [prompt, setPrompt] = useState("")

    const [color, setColor] = useState("")
    const [thing, setThing] = useState("")

    const handlePrompt = (newPrompt: string) => {
        setPrompt(newPrompt)
        setImage("generative-remove")
    }

    const handleColorObject = (cP: string, tP: string) => {
        setColor(cP)
        setThing(tP)
        setImage("generative-color")
    }
    return (
        <main className="flex min-h-screen w-full flex-col items-center gap-8">
            <div className="flex justify-between pt-8 px-4 w-full">
                <h1 className="text-4xl font-bold">Edit Image:</h1>
            </div>

            <div className="flex gap-4">
                <Button variant="ghost" onClick={() => {
                    setImage(undefined)
                }}>Clear All</Button>

                <Button onClick={() => {
                    setImage("generative-fill")
                }}>Apply Generative Fill</Button>

                <Button onClick={() => {
                    setImage("restore")
                }}>Sharp Image</Button>

                <DialogboxH iniprompt={prompt} onSubmit={handlePrompt} />

                <Button onClick={() => {
                    setImage("blur")
                }}>Blur</Button>

                <DialogboxColor iniprompt={thing} colorprompt={color} onSubmit={handleColorObject} />

                <Button onClick={() => {
                    setImage("remove-background")
                }}>Remove Background</Button>
            </div>

            <div className="grid grid-cols-4 gap-10 container">
                <CldImage className="rounded-lg" src={publicId} width="800" height="600" alt="An Image" />

                {image === "generative-fill" && (
                    <CldImage className="rounded-lg" src={publicId} width="600" height="800" alt="An Image" fillBackground />
                )}

                {image === "restore" && (
                    <CldImage className="rounded-lg" src={publicId} width="600" height="800" alt="An Image" crop="fill"
                        restore
                        sizes="100vw" />
                )}
                {image === "generative-remove" && (
                    <CldImage className="rounded-lg" src={publicId} width="600" height="800" alt="An Image" crop="fill"
                        remove={prompt}
                        sizes="100vw" />
                )}
                {image === "blur" && (
                    <CldImage className="rounded-lg" src={publicId} width="600" height="800" alt="An Image" blur="1200" sizes="100vw" />
                )}

                {image === "generative-color" && (
                    <CldImage className="rounded-lg" src={publicId} width="600" height="800" alt="An Image" crop="fill"
                    recolor={[thing, color]} sizes="100vw" />
                )}

                {image === "remove-background" && (
                    <CldImage className="rounded-lg" src={publicId} width="600" height="800" alt="An Image" removeBackground sizes="100vw" />
                )}
            </div>

            {/* Delete shadcn through cmd */}


        </main>
    )
    // <CldImage src={params.public_id} alt="An" width="400" height="400" / >
    // {params}
}