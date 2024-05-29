export function getGoogleDriveImageUrl(driveUrl) {
    const fileId = driveUrl.match(/[-\w]{25,}/);

    if (!fileId) {
        throw new Error("Invalid Google Drive URL");
    }

    return `https://drive.google.com/uc?export=view&id=${fileId[0]}`;
}



export const getOptimizedGoogleDriveImageUrl = (url, size = 300) => {
    const match = url.match(/(?:\/d\/|id=)([a-zA-Z0-9_-]+)/);
    const fileId = match ? match[1] : null;
    return fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w${size}` : null;
  };