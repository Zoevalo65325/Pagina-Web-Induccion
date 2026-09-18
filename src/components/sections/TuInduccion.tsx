import { useState } from 'react';
import {
  Briefcase,
  Clock,
  BookOpen,
  Wrench,
  Award,
  Route,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { cargos } from '@/data/cargos';
import type { Cargo, CargoId } from '@/data/types';

const prioridadBadge: Record<string, string> = {
  Alta: 'badge-alta',
  Media: 'badge-media',
  Baja: 'badge-baja',
};

export function TuInduccion() {
  const [selectedCargo, setSelectedCargo] = useState<CargoId | null>(null);

  const cargo: Cargo | null = selectedCargo
    ? cargos.find((c) => c.id === selectedCargo) ?? null
    : null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="section-title">Tu inducción</h2>
        <p className="section-subtitle mt-1">
          Selecciona tu cargo para consultar tu ruta personalizada
        </p>
      </div>

      {/* Role selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        {cargos.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCargo(c.id)}
            className={`card p-5 text-left transition-all duration-200 hover:border-navy-300 hover:shadow-sm ${
              selectedCargo === c.id
                ? 'border-navy-700 ring-2 ring-navy-200 bg-navy-50'
                : ''
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                  selectedCargo === c.id
                    ? 'bg-navy-700 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                <Briefcase className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-navy-900 leading-snug">
                  {c.nombre}
                </p>
                <span className={`badge mt-2 ${prioridadBadge[c.prioridad]}`}>
                  Prioridad {c.prioridad}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Empty state */}
      {!cargo && (
        <div className="card p-12 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <AlertCircle className="h-7 w-7 text-gray-400" />
          </div>
          <p className="text-sm font-semibold text-navy-900">
            Selecciona uno de los cinco cargos
          </p>
          <p className="text-xs text-gray-500 mt-1 max-w-md">
            Al seleccionar tu cargo, se mostrará automáticamente la prioridad, duración,
            conocimientos, herramientas, competencias y ruta de inducción correspondientes.
          </p>
        </div>
      )}

      {/* Cargo details */}
      {cargo && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Summary bar */}
          <div className="card p-6 bg-navy-900 border-navy-900">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">{cargo.nombre}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="badge bg-white/10 text-white">
                    Prioridad: {cargo.prioridad}
                  </span>
                  <span className="badge bg-white/10 text-white">
                    <Clock className="h-3 w-3 mr-1" />
                    {cargo.duracion}
                  </span>
                  <span className="badge bg-white/10 text-white">{cargo.horas}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid: conocimientos + herramientas + competencias */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Conocimientos */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-navy-700" />
                </div>
                <h4 className="text-sm font-bold text-navy-900">Conocimientos clave</h4>
              </div>
              <ul className="space-y-2">
                {cargo.conocimientos.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Herramientas */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <Wrench className="h-4 w-4 text-emerald-600" />
                </div>
                <h4 className="text-sm font-bold text-navy-900">Herramientas / Sistemas</h4>
              </div>
              <ul className="space-y-2">
                {cargo.herramientas.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Competencias */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center">
                  <Award className="h-4 w-4 text-navy-700" />
                </div>
                <h4 className="text-sm font-bold text-navy-900">Competencias</h4>
              </div>
              <ul className="space-y-2">
                {cargo.competencias.map((comp) => (
                  <li key={comp} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    {comp}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ruta */}
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center">
                <Route className="h-4 w-4 text-navy-700" />
              </div>
              <h4 className="text-sm font-bold text-navy-900">
                Ruta de inducción — {cargo.nombre}
              </h4>
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-gray-200" />
              <div className="space-y-4">
                {cargo.ruta.map((step, i) => (
                  <div key={i} className="relative flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-navy-800 text-white text-xs font-bold flex items-center justify-center shrink-0 z-10">
                      {i + 1}
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
                          {step.dia}
                        </span>
                        <h5 className="text-sm font-bold text-navy-900">{step.titulo}</h5>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        {step.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
