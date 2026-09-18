import { CalendarDays, Clock, Monitor, Gift } from 'lucide-react';
import { cargos } from '@/data/cargos';

const dias = [
  {
    dia: 'Día 1',
    titulo: 'Conoce GTH S.A.S.',
    desc: 'Todos los cargos',
    items: ['Misión', 'Visión', 'Estructura organizacional', 'Objetivos y enfoques específicos del área'],
  },
  {
    dia: 'Día 2',
    titulo: 'Conoce tu rol',
    desc: 'La formación cambia según el cargo',
    items: null,
    cargoEspecifico: true,
  },
  {
    dia: 'Día 3',
    titulo: 'Herramientas de trabajo',
    desc: 'Según el cargo',
    items: null,
    cargoEspecifico: true,
  },
  {
    dia: 'Días 4, 5 y 6',
    titulo: 'Aplicación y acompañamiento',
    desc: 'Según el cargo',
    items: [
      'Acompañamiento práctico',
      'Control interno',
      'Gestión de riesgos',
      'Power BI',
      'Ejercicios prácticos',
      'Campañas',
      'Funciones específicas',
      'Evaluación de competencias',
    ],
  },
];

const dia2PorCargo: Record<string, string> = {
  'coordinador-nomina': 'Proceso de nómina y Código Sustantivo del Trabajo.',
  'auxiliar-documental': 'Archivo y gestión documental.',
  'director-financiero': 'Normas NIIF y políticas/planeación financiera.',
  'analista-marketing': 'Estrategias de marketing.',
  'auxiliar-bienestar': 'SST y bienestar.',
};

const dia3PorCargo: Record<string, string[]> = {
  'coordinador-nomina': ['Excel', 'Word', 'Correo', 'Sistema de Nómina'],
  'auxiliar-documental': ['Excel', 'Escáner / Digitalización', 'Archivo y gestión documental'],
  'director-financiero': ['ERP financiero', 'Excel avanzado', 'Power BI'],
  'analista-marketing': ['Google Analytics', 'Redes sociales', 'Canva / Adobe'],
  'auxiliar-bienestar': ['Excel', 'Formularios digitales', 'Plataforma de bienestar'],
};

const duraciones = cargos.map((c) => ({
  nombre: c.nombre,
  duracion: c.duracion,
  prioridad: c.prioridad,
}));

export function Cronograma() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="section-title">Cronograma de inducción</h2>
        <p className="section-subtitle mt-1">
          Línea de tiempo del proceso de incorporación
        </p>
      </div>

      {/* Info bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center">
            <Monitor className="h-5 w-5 text-navy-700" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Modalidad</p>
            <p className="text-sm font-bold text-navy-900">Presencial + Virtual (Híbrida)</p>
          </div>
        </div>
        <div className="card p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
            <Gift className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Costos</p>
            <p className="text-sm font-bold text-navy-900">Formación sin costos adicionales</p>
          </div>
        </div>
        <div className="card p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center">
            <Clock className="h-5 w-5 text-navy-700" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Duración</p>
            <p className="text-sm font-bold text-navy-900">Variable según el cargo</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-1/2" />
        <div className="space-y-6">
          {dias.map((dia, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row gap-4 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-4 md:left-1/2 top-4 w-3 h-3 rounded-full bg-navy-700 ring-4 ring-white z-10 -translate-x-1/2" />
              <div className="md:w-1/2 pl-12 md:pl-0 md:pr-8">
                {i % 2 === 0 && (
                  <div className="card p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CalendarDays className="h-4 w-4 text-navy-700" />
                      <span className="text-xs font-bold text-navy-700 uppercase tracking-wide">
                        {dia.dia}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-navy-900">{dia.titulo}</h3>
                    <p className="text-xs text-gray-500 mt-1">{dia.desc}</p>
                    {dia.items && (
                      <ul className="mt-3 space-y-1.5">
                        {dia.items.map((item) => (
                          <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {dia.cargoEspecifico && (
                      <div className="mt-3 space-y-2">
                        {Object.entries(dia2PorCargo).length > 0 && dia.dia === 'Día 2' &&
                          Object.entries(dia2PorCargo).map(([key, val]) => {
                            const cargo = cargos.find((c) => c.id === key);
                            return (
                              <div key={key} className="text-xs">
                                <span className="font-semibold text-navy-700">
                                  {cargo?.nombre}:
                                </span>{' '}
                                <span className="text-gray-600">{val}</span>
                              </div>
                            );
                          })}
                        {dia.dia === 'Día 3' &&
                          Object.entries(dia3PorCargo).map(([key, tools]) => {
                            const cargo = cargos.find((c) => c.id === key);
                            return (
                              <div key={key} className="text-xs">
                                <span className="font-semibold text-navy-700">
                                  {cargo?.nombre}:
                                </span>{' '}
                                <span className="text-gray-600">{tools.join(', ')}</span>
                              </div>
                            );
                          })}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="md:w-1/2 pl-12 md:pl-8">
                {i % 2 !== 0 && (
                  <div className="card p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CalendarDays className="h-4 w-4 text-navy-700" />
                      <span className="text-xs font-bold text-navy-700 uppercase tracking-wide">
                        {dia.dia}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-navy-900">{dia.titulo}</h3>
                    <p className="text-xs text-gray-500 mt-1">{dia.desc}</p>
                    {dia.items && (
                      <ul className="mt-3 space-y-1.5">
                        {dia.items.map((item) => (
                          <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Duración por cargo */}
      <div className="card p-6">
        <h3 className="text-sm font-bold text-navy-900 mb-4">
          Duración del proceso según cargo
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {duraciones.map((d) => (
            <div key={d.nombre} className="border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-xs font-semibold text-navy-900 leading-snug">{d.nombre}</p>
              <p className="text-sm font-bold text-emerald-600 mt-2">{d.duracion}</p>
              <p className="text-[10px] text-gray-500 mt-1">Prioridad {d.prioridad}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
