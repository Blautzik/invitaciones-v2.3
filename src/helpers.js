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