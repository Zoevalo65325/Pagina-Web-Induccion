export type CargoId =
  | 'coordinador-nomina'
  | 'auxiliar-documental'
  | 'director-financiero'
  | 'analista-marketing'
  | 'auxiliar-bienestar';

export type Prioridad = 'Alta' | 'Media' | 'Baja';

export interface Cargo {
  id: CargoId;
  nombre: string;
  prioridad: Prioridad;
  duracion: string;
  horas: string;
  conocimientos: string[];
  herramientas: string[];
  competencias: string[];
  ruta: { dia: string; titulo: string; descripcion: string }[];
}

export interface OrgNode {
  titulo: string;
  nombre: string;
  children?: OrgNode[];
}

export interface PreguntaEvaluacion {
  pregunta: string;
  opciones: string[];
  correcta: number;
  categoria: 'Corporativo' | 'Especifico' | 'Herramientas' | 'Competencias';
}

export interface EvaluacionCargo {
  cargoId: CargoId;
  preguntas: PreguntaEvaluacion[];
}

export interface Indicador {
  nombre: string;
  formula: string;
  meta: string;
  descripcion: string;
}
