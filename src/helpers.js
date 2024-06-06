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
    // Convertir la cadena de fecha ISO a un objeto Date (interpretado como UTC)
    const fecha = new Date(fechaISO);

    // Obtener la hora y los minutos en UTC
    const horaUTC = fecha.getUTCHours();
    const minutoUTC = fecha.getUTCMinutes();

    // Ajustar la hora para el horario de Argentina (UTC-3)
    let horaArgentina = horaUTC - 3;

    // Si la hora es negativa, agregar 24 horas para obtener el formato de 24 horas
    horaArgentina += 12

    // Formatear la hora y los minutos en formato de 24 horas
    const horaFormateada = horaArgentina.toString().padStart(2, '0') + ':' + minutoUTC.toString().padStart(2, '0');

    return horaFormateada;
}

