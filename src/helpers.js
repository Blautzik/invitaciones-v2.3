export function getGoogleDriveImageUrl(driveUrl) {
    const fileIdMatch = driveUrl.match(/(?:\/d\/|id=)([-\w]{25,})/);

    if (!fileIdMatch) {
        throw new Error("Invalid Google Drive URL");
    }

    return `https://lh3.googleusercontent.com/d/${fileIdMatch[1]}=s660?authuser=0`;
}

export const getOptimizedGoogleDriveImageUrl = (url, size = 300) => {
    const match = url.match(/(?:\/d\/|id=)([-\w]{25,})/);
    const fileId = match ? match[1] : null;
    return fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w${size}` : null;
};











 export function obtenerHoraArgentina(fechaISO) {
    // Crear un objeto Date a partir de la cadena de fecha ISO
    const fechaUTC = new Date(fechaISO);

    // Calcular la diferencia de horas entre UTC y Argentina (UTC-3)
    const diferenciaHoras = -3;

    // Obtener la hora en milisegundos y ajustar la diferencia de zona horaria
    const horaArgentina = new Date(fechaUTC.getTime() + (diferenciaHoras * 60 * 60 * 1000));

    // Formatear solo la hora en Argentina
    const horaArgentinaString = horaArgentina.toLocaleTimeString('es-AR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'UTC'
    });

    return horaArgentinaString;
}