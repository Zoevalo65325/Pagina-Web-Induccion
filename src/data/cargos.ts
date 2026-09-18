import type { Cargo } from './types';

export const cargos: Cargo[] = [
  {
    id: 'coordinador-nomina',
    nombre: 'Coordinador de Nómina',
    prioridad: 'Alta',
    duracion: '3-5 días',
    horas: '24-40 horas',
    conocimientos: [
      'Misión',
      'Visión',
      'Estructura organizacional',
      'Políticas de RR. HH.',
    ],
    herramientas: [
      'Nómina',
      'Código Sustantivo del Trabajo',
      'Word',
      'Excel',
      'Correo',
    ],
    competencias: ['Liderazgo', 'Organización', 'Trabajo en equipo'],
    ruta: [
      {
        dia: 'Día 1',
        titulo: 'Conocimiento de GTH y estructura',
        descripcion:
          'Presentación de la empresa, misión, visión, estructura organizacional y objetivos del área de nómina.',
      },
      {
        dia: 'Día 2',
        titulo: 'Proceso de nómina y Código Sustantivo del Trabajo',
        descripcion:
          'Capacitación en el proceso de nómina, normatividad laboral y aplicación del Código Sustantivo del Trabajo.',
      },
      {
        dia: 'Día 3',
        titulo: 'Excel, Word, correo y herramientas',
        descripcion:
          'Manejo de herramientas ofimáticas y sistemas de nómina para la gestión operativa del cargo.',
      },
      {
        dia: 'Días posteriores',
        titulo: 'Ejercicios prácticos, acompañamiento y evaluación',
        descripcion:
          'Aplicación práctica de los conocimientos con acompañamiento del equipo y evaluación de competencias.',
      },
    ],
  },
  {
    id: 'auxiliar-documental',
    nombre: 'Auxiliar Documental',
    prioridad: 'Media',
    duracion: '2-4 días',
    horas: '16-32 horas',
    conocimientos: [
      'Misión',
      'Visión',
      'Estructura organizacional',
      'Manejo de la información',
    ],
    herramientas: [
      'Archivo y gestión documental',
      'Excel',
      'Escáner / digitalización',
    ],
    competencias: ['Organización', 'Atención al detalle', 'Responsabilidad'],
    ruta: [
      {
        dia: 'Día 1',
        titulo: 'Conocimiento de GTH y estructura',
        descripcion:
          'Presentación de la empresa, misión, visión y estructura organizacional de GTH S.A.S.',
      },
      {
        dia: 'Día 2',
        titulo: 'Archivo y gestión documental',
        descripcion:
          'Procesos de archivo, clasificación, custodia y manejo de la información documental.',
      },
      {
        dia: 'Día 3',
        titulo: 'Excel, digitalización y herramientas',
        descripcion:
          'Uso de Excel, escáner y herramientas de digitalización para la gestión documental.',
      },
      {
        dia: 'Días posteriores',
        titulo: 'Práctica y evaluación',
        descripcion:
          'Ejercicios prácticos de archivo y digitalización con evaluación de competencias.',
      },
    ],
  },
  {
    id: 'director-financiero',
    nombre: 'Director Financiero',
    prioridad: 'Alta',
    duracion: '5-7 días',
    horas: '40-56 horas',
    conocimientos: [
      'Normas NIIF',
      'Planeación financiera',
      'Control interno',
    ],
    herramientas: ['ERP financiero', 'Excel avanzado', 'Power BI'],
    competencias: ['Liderazgo', 'Análisis financiero', 'Comunicación'],
    ruta: [
      {
        dia: 'Día 1',
        titulo: 'Conocimiento de GTH y estructura',
        descripcion:
          'Presentación de la empresa, misión, visión, estructura organizacional y objetivos del área financiera.',
      },
      {
        dia: 'Día 2',
        titulo: 'NIIF, planeación financiera y control interno',
        descripcion:
          'Normas NIIF, políticas de planeación financiera y frameworks de control interno.',
      },
      {
        dia: 'Día 3',
        titulo: 'ERP, Excel avanzado y Power BI',
        descripcion:
          'Manejo del ERP financiero, Excel avanzado y Power BI para análisis y reportes.',
      },
      {
        dia: 'Días 4-6',
        titulo: 'Acompañamiento, control interno, riesgos y práctica',
        descripcion:
          'Acompañamiento en control interno, gestión de riesgos y ejercicios prácticos del área financiera.',
      },
      {
        dia: 'Evaluación',
        titulo: 'Evaluación de competencias',
        descripcion:
          'Evaluación final de competencias: liderazgo, análisis financiero y comunicación.',
      },
    ],
  },
  {
    id: 'analista-marketing',
    nombre: 'Analista de Marketing',
    prioridad: 'Media',
    duracion: '3-5 días',
    horas: '24-40 horas',
    conocimientos: [
      'Estrategias de marketing',
      'Investigación de mercados',
      'Segmentación',
    ],
    herramientas: ['Google Analytics', 'Redes sociales', 'Canva / Adobe'],
    competencias: ['Creatividad', 'Comunicación', 'Orientación a resultados'],
    ruta: [
      {
        dia: 'Día 1',
        titulo: 'Conocimiento de GTH y estructura',
        descripcion:
          'Presentación de la empresa, misión, visión, estructura organizacional y enfoque de marketing.',
      },
      {
        dia: 'Día 2',
        titulo: 'Estrategias de marketing, investigación y segmentación',
        descripcion:
          'Estrategias de marketing, investigación de mercados y segmentación de público objetivo.',
      },
      {
        dia: 'Día 3',
        titulo: 'Google Analytics, redes sociales y Canva/Adobe',
        descripcion:
          'Herramientas digitales: Google Analytics, gestión de redes sociales y diseño con Canva/Adobe.',
      },
      {
        dia: 'Días posteriores',
        titulo: 'Ejercicios prácticos y evaluación de competencias',
        descripcion:
          'Desarrollo de campañas prácticas y evaluación de competencias: creatividad, comunicación y orientación a resultados.',
      },
    ],
  },
  {
    id: 'auxiliar-bienestar',
    nombre: 'Auxiliar de Bienestar',
    prioridad: 'Baja',
    duracion: '2-4 días',
    horas: '16-32 horas',
    conocimientos: [
      'Misión',
      'Visión',
      'Estructura organizacional',
      'Seguridad y Salud en el Trabajo (SST)',
    ],
    herramientas: ['Excel', 'Formularios digitales', 'Plataforma de bienestar'],
    competencias: ['Empatía', 'Comunicación', 'Proactividad'],
    ruta: [
      {
        dia: 'Día 1',
        titulo: 'Conocimiento de GTH y estructura',
        descripcion:
          'Presentación de la empresa, misión, visión y estructura organizacional de GTH S.A.S.',
      },
      {
        dia: 'Día 2',
        titulo: 'SST y bienestar',
        descripcion:
          'Seguridad y Salud en el Trabajo, programas de bienestar y actividades de integración.',
      },
      {
        dia: 'Día 3',
        titulo: 'Excel, formularios y plataforma',
        descripcion:
          'Uso de Excel, formularios digitales y plataforma de bienestar para la gestión de actividades.',
      },
      {
        dia: 'Días posteriores',
        titulo: 'Actividades prácticas y evaluación de competencias',
        descripcion:
          'Aplicación práctica en programas de bienestar y evaluación de competencias: empatía, comunicación y proactividad.',
      },
    ],
  },
];

export const cargosMap: Record<string, Cargo> = Object.fromEntries(
  cargos.map((c) => [c.id, c])
);
