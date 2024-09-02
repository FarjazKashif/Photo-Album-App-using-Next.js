import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { Folder } from "./page"
import { TrashIcon } from "lucide-react"
import { useState } from "react"

export function AlbumCard({folders}: {folders: Folder}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{folders.name}</CardTitle>
        <CardDescription>View all {folders.name} images.</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button><Link href={`albums/${folders.name}`}>View all Albums</Link></Button>
      </CardFooter>
    </Card>
  )
}
