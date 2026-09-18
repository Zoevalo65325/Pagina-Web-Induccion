import { ArrowRight, Building2, CalendarClock, Route, Users } from 'lucide-react';
import type { Section } from '@/components/Sidebar';

interface InicioProps {
  onNavigate: (section: Section) => void;
}

const etapas = [
  { num: '01', titulo: 'Conoce la organización', desc: 'Identidad, estructura y cultura de GTH S.A.S.' },
  { num: '02', titulo: 'Comprende tu rol', desc: 'Responsabilidades, conocimientos y competencias de tu cargo.' },
  { num: '03', titulo: 'Aprende las herramientas', desc: 'Sistemas y plataformas que utilizarás en tu día a día.' },
  { num: '04', titulo: 'Practica con acompañamiento', desc: 'Ejercicios prácticos guiados por el equipo.' },
  { num: '05', titulo: 'Evalúa tu aprendizaje y experiencia', desc: 'Evaluación de conocimientos y encuesta de satisfacción.' },
];

const infoCards = [
  { icon: Building2, label: 'Empresa', value: 'GTH S.A.S.' },
  { icon: Users, label: 'Modalidad', value: 'Presencial + Virtual' },
  { icon: CalendarClock, label: 'Duración', value: 'Según el cargo' },
  { icon: Route, label: 'Ruta', value: 'Personalizada según el cargo' },
];

export function Inicio({ onNavigate }: InicioProps) {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-navy-900 px-8 py-16 md:px-16 md:py-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-500/20 rounded-full blur-3xl translate-y-1/2" />
        <div className="relative max-w-3xl">
          <p className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Portal de Inducción y Onboarding
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Bienvenido a GTH S.A.S.
          </h1>
          <p className="text-xl md:text-2xl text-navy-200 font-medium mt-3">
            Tu historia comienza aquí.
          </p>
          <p className="text-navy-200 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
            Este portal te acompañará durante tu proceso de inducción, facilitando tu
            integración a GTH S.A.S., el conocimiento de nuestra organización y el
            desarrollo de las competencias necesarias para desempeñar tu rol.
          </p>
          <button
            onClick={() => onNavigate('induccion')}
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors duration-200"
          >
            Comenzar mi inducción
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Info cards */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {infoCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="card p-6">
              <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-navy-700" />
              </div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                {card.label}
              </p>
              <p className="text-base font-semibold text-navy-900 mt-1">{card.value}</p>
            </div>
          );
        })}
      </section>

      {/* Process */}
      <section>
        <h2 className="section-title">Tu proceso de incorporación</h2>
        <p className="section-subtitle mt-1 mb-8">
          Cinco etapas diseñadas para tu integración exitosa
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {etapas.map((etapa, i) => (
            <div key={etapa.num} className="relative">
              <div className="card p-6 h-full">
                <span className="text-2xl font-extrabold text-navy-200">{etapa.num}</span>
                <h3 className="text-sm font-bold text-navy-900 mt-3 leading-snug">
                  {etapa.titulo}
                </h3>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">{etapa.desc}</p>
              </div>
              {i < etapas.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
