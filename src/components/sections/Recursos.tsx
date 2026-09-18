import React from 'react';
import { Video } from 'lucide-react';
import videoInduccion from '../../../public/video.mp4';

export function Recursos() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="section-title">Video de inducción</h2>
        <p className="section-subtitle mt-1">
          Conoce el mensaje de bienvenida y los aspectos esenciales de tu incorporación a GTH S.A.S.
        </p>
      </div>

      <section className="card p-6 md:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center">
            <Video className="h-5 w-5 text-navy-700" />
          </div>
          <div>
            <h3 className="text-base font-bold text-navy-900">Video de inducción</h3>
            <p className="text-xs text-emerald-600 mt-0.5">Disponible</p>
          </div>
        </div>

        <div className="relative aspect-video bg-black rounded-xl overflow-hidden flex flex-col items-center justify-center shadow-lg">
          <video controls preload="auto" playsInline className="w-full h-full object-contain">
            <source src={videoInduccion} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
      </section>
    </div>
  );
}
