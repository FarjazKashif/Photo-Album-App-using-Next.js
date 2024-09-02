"use server"

import { iCloud } from "@/app/gallery/page"
import cloudinary from "cloudinary";
import { error } from "console";

export async function createFolder(image: iCloud, album: string) {


    try {
        // Ensure the new folder name ends with a slash
        if (!album.endsWith('/')) {
            album += '/';
        }
        await cloudinary.v2.api.create_folder(album)

        let parts = image.public_id.split('/')
        if (parts.length > 1) {
            parts = parts.slice(1)
        }
        let publicId = parts.join('/')

        await cloudinary.v2.uploader.rename((image.public_id), `${album}/${publicId}`);

    } catch (error) {
        console.error("Error moving image:", error)
    }
}

