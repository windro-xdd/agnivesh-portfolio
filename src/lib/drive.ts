import { google } from "googleapis"

export type DriveFile = {
  id: string
  name: string
  mimeType: string
  thumbnailLink?: string
  webContentLink?: string
}

const drive = google.drive({
  version: "v3",
  auth: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY,
})

export async function getPortfolioImages() {
  try {
    const response = await drive.files.list({
      q: `'${process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID}' in parents and mimeType contains 'image/' and trashed = false`,
      fields: "files(id, name, mimeType, thumbnailLink, webContentLink)",
      orderBy: "createdTime desc",
    })

    return (response.data.files as DriveFile[]) || []
  } catch (error) {
    console.error("Error fetching images from Drive:", error)
    return []
  }
}
