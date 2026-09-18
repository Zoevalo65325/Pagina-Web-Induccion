import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import type { Section } from '@/components/Sidebar';
import { Inicio } from '@/components/sections/Inicio';
import { Conocenos } from '@/components/sections/Conocenos';
import { TuInduccion } from '@/components/sections/TuInduccion';
import { Cronograma } from '@/components/sections/Cronograma';
import { Recursos } from '@/components/sections/Recursos';
import { Evaluacion } from '@/components/sections/Evaluacion';
import { TuExperiencia } from '@/components/sections/TuExperiencia';
import { Indicadores } from '@/components/sections/Indicadores';

const sectionTitles: Record<Section, string> = {
  inicio: 'Inicio',
  conocenos: 'Conócenos',
  induccion: 'Tu inducción',
  cronograma: 'Cronograma',
  recursos: 'Video de inducción',
  evaluacion: 'Evaluación',
  experiencia: 'Tu experiencia',
  indicadores: 'Indicadores',
};

function App() {
  const [section, setSection] = useState<Section>('inicio');

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar active={section} onNavigate={setSection} />

      {/* Mobile spacer */}
      <div className="h-14 md:hidden" />

      {/* Main content */}
      <main className="md:ml-72">
        {/* Top bar */}
        <header className="sticky top-14 md:top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 md:px-10 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 font-medium">
                Portal de Inducción y Onboarding
              </p>
              <h1 className="text-lg font-bold text-navy-900">
                {sectionTitles[section]}
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-xs text-gray-400">GTH S.A.S.</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="text-xs font-semibold text-emerald-600">
                Talento con propósito
              </span>
            </div>
          </div>
        </header>

        <div className="px-6 md:px-10 py-8 max-w-8xl mx-auto">
          {section === 'inicio' && <Inicio onNavigate={setSection} />}
          {section === 'conocenos' && <Conocenos />}
          {section === 'induccion' && <TuInduccion />}
          {section === 'cronograma' && <Cronograma />}
          {section === 'recursos' && <Recursos />}
          {section === 'evaluacion' && <Evaluacion />}
          {section === 'experiencia' && <TuExperiencia />}
          {section === 'indicadores' && <Indicadores />}
        </div>
      </main>
    </div>
  );
}

export default App;
