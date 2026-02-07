export type DriveFile = {
  id: string
  name: string
  mimeType: string
  thumbnailLink?: string
  webContentLink?: string
  createdTime?: string
  imageMediaMetadata?: {
    width: number
    height: number
  }
}

async function fetchDriveFiles(query: string, fields: string): Promise<DriveFile[]> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY
  
  if (!apiKey) {
    console.error("Missing NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY")
    return []
  }
  
  const url = new URL("https://www.googleapis.com/drive/v3/files")
  url.searchParams.set("q", query)
  url.searchParams.set("fields", `files(${fields})`)
  url.searchParams.set("orderBy", "createdTime desc")
  url.searchParams.set("pageSize", "100")
  url.searchParams.set("key", apiKey)
  
  const response = await fetch(url.toString(), { next: { revalidate: 3600 } })
  
  if (!response.ok) {
    const error = await response.text()
    console.error("Drive API error:", response.status, error)
    return []
  }
  
  const data = await response.json()
  return data.files || []
}

export async function getPortfolioImages(): Promise<DriveFile[]> {
  try {
    const folderId = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY
    
    console.log("Drive API Key present:", !!apiKey, "length:", apiKey?.length)
    console.log("Folder ID:", folderId)
    
    if (!folderId || folderId.length < 10) {
      console.error("Missing or invalid NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID:", folderId)
      return []
    }

    const folders = await fetchDriveFiles(
      `'${folderId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
      "id,name"
    )

    console.log("Found subfolders:", folders.map(f => ({ id: f.id, name: f.name })))
    
    const folderIds = [folderId, ...folders.map((f) => f.id)].filter(id => id && id.length > 5)
    console.log("Folder IDs to query:", folderIds)

    const imagePromises = folderIds.map((id) =>
      fetchDriveFiles(
        `'${id}' in parents and mimeType contains 'image/' and trashed = false`,
        "id,name,mimeType,thumbnailLink,webContentLink,createdTime,imageMediaMetadata"
      )
    )

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
