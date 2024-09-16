import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from './circulo';

const VideoBackgroundPage = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [error, setError] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const videoRef = useRef(null);

  const videoUrl = 'https://res.cloudinary.com/fedexx/video/upload/v1726319161/Black_Gold_Modern_Coming_Soon_Instagram_Story_3_cljgqm.mp4'

  useEffect(() => {
    console.log('Componente montado');
    console.log('URL del video:', videoUrl);

    let timeoutId;

    if (videoRef.current) {
      console.log('Configurando eventos del video');
      
      const handleLoadStart = () => {
        console.log('Video: Carga iniciada');
        setLoadingProgress(10);
      };
      const handleLoadedMetadata = () => {
        console.log('Video: Metadatos cargados');
        setLoadingProgress(50);
      };
      const handleCanPlay = () => {
        console.log('Video: Listo para reproducir');
        setIsVideoReady(true);
        setLoadingProgress(100);
      };
      const handleError = (e) => {
        console.error('Error en la carga del video:', e);
        setError(`Error al cargar el video: ${e.target.error?.message || 'Desconocido'}`);
      };
      const handleProgress = () => {
        if (videoRef.current.buffered.length > 0) {
          const loadedPercentage = (videoRef.current.buffered.end(0) / videoRef.current.duration) * 100;
          setLoadingProgress(Math.min(loadedPercentage, 99));
        }
      };

      videoRef.current.addEventListener('loadstart', handleLoadStart);
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      videoRef.current.addEventListener('canplay', handleCanPlay);
      videoRef.current.addEventListener('error', handleError);
      videoRef.current.addEventListener('progress', handleProgress);

      videoRef.current.load();

      timeoutId = setTimeout(() => {
        if (!isVideoReady) {
          console.log('Timeout: El video no se cargó en 30 segundos');
          setError('El video está tardando demasiado en cargar. Por favor, recarga la página o verifica tu conexión.');
        }
      }, 30000);

      return () => {
        clearTimeout(timeoutId);
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadstart', handleLoadStart);
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
          videoRef.current.removeEventListener('canplay', handleCanPlay);
          videoRef.current.removeEventListener('error', handleError);
          videoRef.current.removeEventListener('progress', handleProgress);
        }
      };
    }
  }, [videoUrl, isVideoReady]);

  const handleEnterSite = () => {
    console.log('Intentando reproducir el video');
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        console.log('Video reproduciendo');
        setHasEntered(true);
      }).catch(error => {
        console.error("Error al reproducir el video:", error);
        setError("Error al reproducir el video. Por favor, intenta de nuevo.");
      });
    }
  };

  console.log('Renderizando. Estado actual:', { isVideoReady, hasEntered, error, loadingProgress });

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        loop
        muted
        playsInline
        preload="auto"
      />

      <AnimatePresence>
        {!hasEntered && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-20 bg-black flex flex-col items-center justify-center"
          >
            <LoadingSpinner />
            {!isVideoReady && !error && ( 
              <>
                <p className="text-white text-xl mb-2">Cargando... {loadingProgress.toFixed(0)}%</p>
                <div className="w-64 h-2 bg-gray-200 rounded">
                  <div 
                    className="h-full bg-blue-500 rounded" 
                    style={{ width: `${loadingProgress}%` }}
                  ></div>
                </div>
              </>
            )}
            {isVideoReady && !error && (
              <button
                onClick={handleEnterSite}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Entrar al sitio
              </button>
            )}
            {error && (
              <p className="text-red-500 text-xl mb-4">{error}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hasEntered && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white bg-transparent bg-opacity-50"
          >
            <h1 className="text-4xl font-bold mb-4">Bienvenido a mi sitio</h1>
            <p className="text-xl mb-8">Información interesante sobre el sitio</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoBackgroundPage;