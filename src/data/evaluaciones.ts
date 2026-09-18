import type { EvaluacionCargo } from './types';

export const evaluaciones: EvaluacionCargo[] = [
  {
    cargoId: 'coordinador-nomina',
    preguntas: [
      {
        pregunta: '¿Qué representa el color azul en el logo de GTH S.A.S.?',
        opciones: [
          'Crecimiento y desarrollo',
          'Confianza, honestidad y seguridad',
          'Bienestar y empatía',
          'Innovación y tecnología',
        ],
        correcta: 1,
        categoria: 'Corporativo',
      },
      {
        pregunta: '¿Quién dirige la Dirección de Talento Humano en GTH S.A.S.?',
        opciones: [
          'Nathalia Tobón',
          'Elsy Vanessa Cardona Melo',
          'Alexander Jose Gutierrez Palmar',
          'Karen Vanessa Cordillo Sierra',
        ],
        correcta: 1,
        categoria: 'Corporativo',
      },
      {
        pregunta: '¿Cuál es una de las frases institucionales de GTH S.A.S.?',
        opciones: [
          'Innovación sin límites',
          'Talento con propósito',
          'Liderando el futuro',
          'Excelencia operativa',
        ],
        correcta: 1,
        categoria: 'Corporativo',
      },
      {
        pregunta:
          'Como Coordinador de Nómina, ¿qué normativa es fundamental para tu gestión?',
        opciones: [
          'Normas NIIF',
          'Código Sustantivo del Trabajo',
          'Estatuto Tributario',
          'Ley de Protección de Datos',
        ],
        correcta: 1,
        categoria: 'Especifico',
      },
      {
        pregunta:
          '¿Cuál de las siguientes es una competencia esperada para el Coordinador de Nómina?',
        opciones: [
          'Creatividad',
          'Liderazgo',
          'Análisis financiero',
          'Empatía',
        ],
        correcta: 1,
        categoria: 'Competencias',
      },
      {
        pregunta:
          '¿Qué herramienta del listado es esencial para el cálculo y gestión de nómina?',
        opciones: ['Power BI', 'Canva', 'Sistema de Nómina', 'Google Analytics'],
        correcta: 2,
        categoria: 'Herramientas',
      },
      {
        pregunta:
          'Un colaborador tiene una duda sobre su liquidación. ¿Cuál es la mejor acción?',
        opciones: [
          'Ignorar la solicitud hasta tener tiempo',
          'Responder con claridad basándose en el Código Sustantivo del Trabajo',
          'Derivar la duda al área de marketing',
          'Pedir al colaborador que consulte en internet',
        ],
        correcta: 1,
        categoria: 'Competencias',
      },
      {
        pregunta:
          '¿Qué duración tiene el proceso de inducción para el Coordinador de Nómina?',
        opciones: ['2-4 días', '3-5 días', '5-7 días', '1-2 días'],
        correcta: 1,
        categoria: 'Corporativo',
      },
    ],
  },
  {
    cargoId: 'auxiliar-documental',
    preguntas: [
      {
        pregunta: '¿Qué representa el perfil humano en el logo de GTH S.A.S.?',
        opciones: [
          'Crecimiento y desarrollo',
          'Enfoque en las personas, bienestar y reconocimiento',
          'Confianza y seguridad',
          'Productividad y eficiencia',
        ],
        correcta: 1,
        categoria: 'Corporativo',
      },
      {
        pregunta: '¿Quién es el Asistente de Gestión Documental en GTH S.A.S.?',
        opciones: [
          'Angelica Maria Manso Carrillo',
          'Kimberly Barbosa',
          'Danna Marcela García Sepulveda',
          'Salome Guzmán Jaramillo',
        ],
        correcta: 0,
        categoria: 'Corporativo',
      },
      {
        pregunta: '¿Qué modalidad tiene el proceso de inducción en GTH S.A.S.?',
        opciones: [
          'Únicamente presencial',
          'Únicamente virtual',
          'Presencial + Virtual (Híbrida)',
          'Autoformativo',
        ],
        correcta: 2,
        categoria: 'Corporativo',
      },
      {
        pregunta:
          '¿Cuál es una de las competencias esperadas para el Auxiliar Documental?',
        opciones: [
          'Liderazgo',
          'Atención al detalle',
          'Análisis financiero',
          'Creatividad',
        ],
        correcta: 1,
        categoria: 'Competencias',
      },
      {
        pregunta:
          '¿Qué herramienta es fundamental para la digitalización de documentos?',
        opciones: ['Power BI', 'Escáner / digitalización', 'ERP financiero', 'Canva'],
        correcta: 1,
        categoria: 'Herramientas',
      },
      {
        pregunta:
          '¿Qué conocimiento clave debe tener un Auxiliar Documental además de la misión y visión?',
        opciones: [
          'Normas NIIF',
          'Manejo de la información',
          'Estrategias de marketing',
          'Código Sustantivo del Trabajo',
        ],
        correcta: 1,
        categoria: 'Especifico',
      },
      {
        pregunta:
          'Recibes un lote de documentos desordenados. ¿Cuál es la mejor acción?',
        opciones: [
          'Guardarlos sin clasificar para ahorrar tiempo',
          'Clasificarlos según el procedimiento de archivo y gestión documental',
          'Devolverlos al remitente',
          'Digitalizarlos sin revisar el contenido',
        ],
        correcta: 1,
        categoria: 'Competencias',
      },
      {
        pregunta:
          '¿Qué duración tiene el proceso de inducción para el Auxiliar Documental?',
        opciones: ['2-4 días', '3-5 días', '5-7 días', '7-10 días'],
        correcta: 0,
        categoria: 'Corporativo',
      },
    ],
  },
  {
    cargoId: 'director-financiero',
    preguntas: [
      {
        pregunta:
          '¿Qué representan las flechas ascendentes en el logo de GTH S.A.S.?',
        opciones: [
          'Confianza y seguridad',
          'Crecimiento, desarrollo de competencias y mejora continua',
          'Bienestar y empatía',
          'Conexión con el cliente',
        ],
        correcta: 1,
        categoria: 'Corporativo',
      },
      {
        pregunta: '¿Quién ocupa el cargo de Director Financiero en GTH S.A.S.?',
        opciones: [
          'Juan Sánchez Zapata',
          'Alexander Jose Gutierrez Palmar',
          'Yeison Alejandro Roas Mosquera',
          'Luisa Maria Monsalve',
        ],
        correcta: 1,
        categoria: 'Corporativo',
      },
      {
        pregunta:
          '¿Cuál es una de las frases institucionales presentes en la identidad de GTH S.A.S.?',
        opciones: [
          'Conectando talento con oportunidades',
          'Liderazgo en acción',
          'Gestión sin fronteras',
          'Talento que transforma',
        ],
        correcta: 0,
        categoria: 'Corporativo',
      },
      {
        pregunta:
          '¿Qué normas son conocimiento clave para el Director Financiero?',
        opciones: [
          'Código Sustantivo del Trabajo',
          'Normas NIIF',
          'Ley de Protección de Datos',
          'Estatuto Tributario Único',
        ],
        correcta: 1,
        categoria: 'Especifico',
      },
      {
        pregunta:
          '¿Qué herramienta de análisis y visualización debe dominar el Director Financiero?',
        opciones: ['Canva', 'Google Analytics', 'Power BI', 'Escáner'],
        correcta: 2,
        categoria: 'Herramientas',
      },
      {
        pregunta:
          '¿Cuál es una competencia esperada para el Director Financiero?',
        opciones: [
          'Empatía',
          'Análisis financiero',
          'Atención al detalle',
          'Creatividad',
        ],
        correcta: 1,
        categoria: 'Competencias',
      },
      {
        pregunta:
          'El área financiera identifica un riesgo de control interno. ¿Qué acción es la más adecuada?',
        opciones: [
          'Esperar al siguiente trimestre para actuar',
          'Implementar medidas correctivas inmediatas y comunicar al equipo',
          'Ocultar el riesgo para no generar alarmas',
          'Delegar la decisión sin supervisión',
        ],
        correcta: 1,
        categoria: 'Competencias',
      },
      {
        pregunta:
          '¿Qué duración tiene el proceso de inducción para el Director Financiero?',
        opciones: ['2-4 días', '3-5 días', '5-7 días', '7-10 días'],
        correcta: 2,
        categoria: 'Corporativo',
      },
    ],
  },
  {
    cargoId: 'analista-marketing',
    preguntas: [
      {
        pregunta:
          '¿Qué representa el color verde en el logo de GTH S.A.S.?',
        opciones: [
          'Confianza y seguridad',
          'Crecimiento personal, inclusión, diversidad y empatía',
          'Crecimiento y desarrollo',
          'Productividad',
        ],
        correcta: 1,
        categoria: 'Corporativo',
      },
      {
        pregunta:
          '¿Quién es el Coord./Analista de Tecnología y Marketing en GTH S.A.S.?',
        opciones: [
          'Jairo Andres Ramirez Rojas',
          'Ericka Tatiana Villa Grajales',
          'Maria Juliana Galviz',
          'Jessica Lavado Bedoya',
        ],
        correcta: 0,
        categoria: 'Corporativo',
      },
      {
        pregunta:
          '¿Cuál es una de las cinco etapas del proceso de incorporación en GTH S.A.S.?',
        opciones: [
          'Diseño de campañas',
          'Aprende las herramientas',
          'Análisis financiero',
          'Gestión documental',
        ],
        correcta: 1,
        categoria: 'Corporativo',
      },
      {
        pregunta:
          '¿Qué conocimiento clave debe tener un Analista de Marketing?',
        opciones: [
          'Investigación de mercados',
          'Normas NIIF',
          'Código Sustantivo del Trabajo',
          'Manejo de la información',
        ],
        correcta: 0,
        categoria: 'Especifico',
      },
      {
        pregunta:
          '¿Qué herramienta de análisis digital debe utilizar el Analista de Marketing?',
        opciones: ['ERP financiero', 'Google Analytics', 'Escáner', 'Power BI'],
        correcta: 1,
        categoria: 'Herramientas',
      },
      {
        pregunta:
          '¿Cuál es una competencia esperada para el Analista de Marketing?',
        opciones: [
          'Organización',
          'Orientación a resultados',
          'Liderazgo',
          'Responsabilidad',
        ],
        correcta: 1,
        categoria: 'Competencias',
      },
      {
        pregunta:
          'Te asignan una campaña con bajo rendimiento. ¿Qué haces?',
        opciones: [
          'Mantener la campaña sin cambios',
          'Analizar métricas en Google Analytics, identificar oportunidades y optimizar',
          'Cancelar la campaña sin informar',
          'Cambiar el diseño sin analizar datos',
        ],
        correcta: 1,
        categoria: 'Competencias',
      },
      {
        pregunta:
          '¿Qué duración tiene el proceso de inducción para el Analista de Marketing?',
        opciones: ['2-4 días', '3-5 días', '5-7 días', '7-10 días'],
        correcta: 1,
        categoria: 'Corporativo',
      },
    ],
  },
  {
    cargoId: 'auxiliar-bienestar',
    preguntas: [
      {
        pregunta:
          '¿Qué representa el color verde en el logo de GTH S.A.S.?',
        opciones: [
          'Confianza y seguridad',
          'Crecimiento personal, inclusión, diversidad y empatía',
          'Crecimiento y desarrollo',
          'Innovación',
        ],
        correcta: 1,
        categoria: 'Corporativo',
      },
      {
        pregunta:
          '¿Quién es la Auxiliar de Bienestar en GTH S.A.S.?',
        opciones: [
          'Heidy Carolina Villamizar Mendez',
          'Danna Geraldine Gutierrez Marin',
          'Estefania Arboleda',
          'Maria Juliana Galviz',
        ],
        correcta: 0,
        categoria: 'Corporativo',
      },
      {
        pregunta:
          '¿Qué modalidad tiene el proceso de inducción en GTH S.A.S.?',
        opciones: [
          'Presencial + Virtual (Híbrida)',
          'Solo presencial',
          'Solo virtual',
          'Autoestudio',
        ],
        correcta: 0,
        categoria: 'Corporativo',
      },
      {
        pregunta:
          '¿Qué conocimiento clave debe tener un Auxiliar de Bienestar?',
        opciones: [
          'Seguridad y Salud en el Trabajo (SST)',
          'Normas NIIF',
          'Investigación de mercados',
          'Planeación financiera',
        ],
        correcta: 0,
        categoria: 'Especifico',
      },
      {
        pregunta:
          '¿Qué herramienta debe utilizar el Auxiliar de Bienestar para registrar actividades?',
        opciones: [
          'ERP financiero',
          'Formularios digitales',
          'Google Analytics',
          'Power BI',
        ],
        correcta: 1,
        categoria: 'Herramientas',
      },
      {
        pregunta:
          '¿Cuál es una competencia esperada para el Auxiliar de Bienestar?',
        opciones: [
          'Análisis financiero',
          'Empatía',
          'Creatividad',
          'Liderazgo',
        ],
        correcta: 1,
        categoria: 'Competencias',
      },
      {
        pregunta:
          'Un colaborador expresa sentirse estresado. ¿Cuál es la mejor acción?',
        opciones: [
          'Indicarle que no es relevante',
          'Escuchar con empatía y orientarlo hacia los programas de bienestar disponibles',
          'Derivarlo al área financiera',
          'Ignorar el comentario',
        ],
        correcta: 1,
        categoria: 'Competencias',
      },
      {
        pregunta:
          '¿Qué duración tiene el proceso de inducción para el Auxiliar de Bienestar?',
        opciones: ['2-4 días', '3-5 días', '5-7 días', '7-10 días'],
        correcta: 0,
        categoria: 'Corporativo',
      },
    ],
  },
];
