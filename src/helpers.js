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

export function convertirHoraArgentina(fechaISO) {
    // Crear un objeto Date a partir de la cadena de fecha ISO
    const fechaUTC = new Date(fechaISO);

    // Calcular la diferencia de horas entre UTC y Argentina (UTC-3)
    const diferenciaHoras = -3;

    // Obtener la hora en milisegundos y ajustar la diferencia de zona horaria
    const horaArgentina = new Date(fechaUTC.getTime() + (diferenciaHoras * 60 * 60 * 1000));

    // Formatear la fecha y hora en Argentina
    const opciones = { 
        year: 'numeric', month: '2-digit', day: '2-digit', 
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false, timeZone: 'UTC'
    };

    // Convertir la fecha a la hora Argentina en un string legible
    const fechaArgentinaString = horaArgentina.toLocaleString('en-GB', opciones).replace(",", "");

    return fechaArgentinaString;
}