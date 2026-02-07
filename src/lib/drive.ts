import { google } from "googleapis"

export type DriveFile = {
  id: string
  name: string
  mimeType: string
  thumbnailLink?: string
  webContentLink?: string
  createdTime?: string
}

const drive = google.drive({
  version: "v3",
  auth: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY,
})

export async function getPortfolioImages() {
  try {
    const folderId = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID
    if (!folderId) return []

    const foldersResponse = await drive.files.list({
      q: `'${folderId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
      fields: "files(id, name)",
    })

    const folders = foldersResponse.data.files || []
    const folderIds = [folderId, ...folders.map((f) => f.id)]

    const imagePromises = folderIds.map(async (id) => {
      const response = await drive.files.list({
        q: `'${id}' in parents and mimeType contains 'image/' and trashed = false`,
        fields: "files(id, name, mimeType, thumbnailLink, webContentLink, createdTime)",
        orderBy: "createdTime desc",
        pageSize: 100,
      })
      return (response.data.files as DriveFile[]) || []
    })

    const imagesArrays = await Promise.all(imagePromises)
    const allImages = imagesArrays.flat().sort((a, b) => {
      return new Date(b.createdTime || 0).getTime() - new Date(a.createdTime || 0).getTime()
    })

    return allImages
  } catch (error) {
    console.error("Error fetching images from Drive:", error)
    return []
  }
}
