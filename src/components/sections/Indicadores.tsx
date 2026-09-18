import {
  Users,
  CheckSquare,
  GraduationCap,
  Smile,
  TrendingDown,
  Target,
  Info,
} from 'lucide-react';
import { indicadores } from '@/data/indicadores';

const iconMap = [Users, CheckSquare, GraduationCap, Smile, TrendingDown];

export function Indicadores() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="section-title">Indicadores del proceso</h2>
        <p className="section-subtitle mt-1">
          Dashboard de gestión del plan de onboarding
        </p>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {indicadores.map((ind, i) => {
          const Icon = iconMap[i] || Target;
          return (
            <div key={ind.nombre} className="card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-navy-700" />
                </div>
                <span className="badge bg-emerald-50 text-emerald-700">
                  Meta: {ind.meta}
                </span>
              </div>
              <h3 className="text-sm font-bold text-navy-900 leading-snug">
                {ind.nombre}
              </h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                {ind.descripcion}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
                  Fórmula
                </p>
                <p className="text-xs text-navy-700 font-medium mt-1 font-mono">
                  {ind.formula}
                </p>
              </div>
              <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50">
                <Info className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                <p className="text-xs text-gray-500 font-medium">Sin datos registrados</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dashboard note */}
      <div className="card p-6 bg-navy-50 border-navy-100">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center shrink-0">
            <Info className="h-5 w-5 text-navy-700" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-navy-900">
              Indicadores en fase de implementación
            </h4>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              Los indicadores se calcularán automáticamente a partir de los datos reales
              del proceso de inducción. Las fórmulas y metas están definidas según el plan
              estratégico de onboarding de GTH S.A.S. No se muestran resultados inventados.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <section className="card p-8 md:p-12 bg-navy-900 border-navy-900">
        <div className="max-w-3xl">
          <h3 className="text-xl font-bold text-emerald-400 mb-4">Nuestro propósito</h3>
          <p className="text-navy-100 text-base leading-relaxed">
            "El plan busca facilitar la adaptación rápida y efectiva, mitigando la
            ansiedad y el temor a equivocarse identificados en el mapa de empatía. Al
            implementarse de manera híbrida (virtual y presencial), optimiza tiempos y
            recursos tecnológicos existentes sin incurrir en costos logísticos
            superfluos, consolidándose como un onboarding rentable y de alto impacto
            para GTH S.A.S."
          </p>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">
              Actividad No. 2
            </p>
            <p className="text-navy-200 text-sm mt-1">
              Planeación Estratégica y Diagnóstico Integral del Plan de Onboarding
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
