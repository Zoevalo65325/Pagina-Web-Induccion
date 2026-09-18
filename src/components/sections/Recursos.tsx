import { Play, Video } from 'lucide-react';

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
            <p className="text-xs text-gray-500 mt-0.5">Disponible próximamente</p>
          </div>
        </div>

        <div className="relative aspect-video bg-navy-900 rounded-xl overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.16),_transparent_48%)]" />
          <div className="relative w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <Play className="h-7 w-7 text-white/60 ml-1" />
          </div>
          <p className="relative text-white/75 text-sm mt-5 font-semibold">
            El video de inducción se incorporará posteriormente
          </p>
          <p className="relative text-white/40 text-xs mt-1">
            Este espacio está preparado para el contenido oficial de GTH S.A.S.
          </p>
        </div>
      </section>
    </div>
  );
}
