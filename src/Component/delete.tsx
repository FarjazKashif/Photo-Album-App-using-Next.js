"use client"

import { iCloud } from "@/app/gallery/page";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function DeleteImage({data}: {data: iCloud}) {
    const [initialImage, setInitialImage] = useState(data);

    <Button onClick={(e: any)=> {
        setInitialImage((x)=> x.)
    }}></Button>
}