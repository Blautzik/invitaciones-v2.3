export function getGoogleDriveImageUrl(driveUrl) {
    const fileId = driveUrl.match(/[-\w]{25,}/);

    if (!fileId) {
        throw new Error("Invalid Google Drive URL");
    }

    return `https://drive.google.com/uc?export=view&id=${fileId[0]}`;
}