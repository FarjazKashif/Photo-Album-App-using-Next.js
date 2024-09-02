"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchForm({ iniSearch }: { iniSearch: string }) {
    const [tagName, setTagName] = useState(iniSearch)

    const router = useRouter()


    useEffect(() => {
        setTagName(iniSearch)
    }, [iniSearch])
    return (
        <div className="grid gap-4">
            <div >
                <form className="flex items-center gap-4" onSubmit={(e) => {
                    e.preventDefault()
                    router.replace(`/gallery?search=${encodeURIComponent(tagName)}`)
                    router.refresh()
                }}>
                    <Label htmlFor="Album" className="text-right">
                        Search:
                    </Label>
                    <Input
                        id="prompt"
                        placeholder="Favorite, Dog, Cat, etc....."
                        onChange={(e) => setTagName(e.currentTarget.value)}
                        value={tagName}
                        className="col-span-3"
                    />
                    <Button type="submit">Search</Button>
                </form>
            </div>
        </div>
    )
}