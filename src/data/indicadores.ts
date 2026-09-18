import type { Indicador } from './types';

export const indicadores: Indicador[] = [
  {
    nombre: 'Asistencia a las sesiones',
    formula: '(Asistentes / Convocados) × 100',
    meta: '≥ 90%',
    descripcion:
      'Mide el porcentaje de colaboradores que asisten a las sesiones programadas de inducción.',
  },
  {
    nombre: 'Cumplimiento de actividades / Cobertura',
    formula: '(Actividades completadas / Programadas) × 100',
    meta: '≥ 95%',
    descripcion:
      'Mide el porcentaje de actividades del plan de inducción que se ejecutan según lo programado.',
  },
  {
    nombre: 'Nivel de aprendizaje / Eficacia',
    formula: '(Aprobados / Evaluados) × 100',
    meta: '≥ 85%',
    descripcion:
      'Mide el porcentaje de colaboradores que aprueban la evaluación de inducción (meta ≥ 85%).',
  },
  {
    nombre: 'Satisfacción con la inducción',
    formula: 'Suma de calificaciones / Calificación máxima',
    meta: '≥ 85% o ≥ 4.2/5',
    descripcion:
      'Mide el nivel de satisfacción de los colaboradores con el proceso de inducción recibido.',
  },
  {
    nombre: 'Tasa de deserción',
    formula: '(Personas que abandonaron / Iniciaron) × 100',
    meta: '≤ 2%',
    descripcion:
      'Mide el porcentaje de colaboradores que abandonan el proceso de inducción antes de finalizarlo.',
  },
];
