import type { OrgNode } from './types';

export const organigrama: OrgNode = {
  titulo: 'Gerencia',
  nombre: 'Nathalia Tobón',
  children: [
    {
      titulo: 'Asistente de Gerencia',
      nombre: 'Danna Marcela García Sepulveda',
    },
    {
      titulo: 'Dirección de Talento Humano',
      nombre: 'Elsy Vanessa Cardona Melo',
      children: [
        {
          titulo: 'Analista de Talento Humano',
          nombre: 'Karen Vanessa Cordillo Sierra',
        },
        {
          titulo: 'Área de Nómina',
          nombre: '',
          children: [
            { titulo: 'Analista de Nómina', nombre: 'Andres Felipe Tamayo Salazar' },
            { titulo: 'Asistente de Nómina', nombre: 'Kelly Yuliana Renteria Palomeque' },
            { titulo: 'Auxiliar de Nómina', nombre: 'Laura Vanessa Gutierrez Duque' },
          ],
        },
        {
          titulo: 'Área de SST',
          nombre: '',
          children: [
            { titulo: 'Aux SST', nombre: 'Estefania Arboleda' },
            { titulo: 'Asistente de SST', nombre: 'Emilly Kerguelen Cano' },
          ],
        },
        {
          titulo: 'Talento Humano',
          nombre: '',
          children: [
            { titulo: 'Auxiliar de Capacitación', nombre: 'Jhonatan David Marin Lopez' },
            { titulo: 'Auxiliar Evaluación de Desempeño', nombre: 'Danna Geraldine Gutierrez Marin' },
            { titulo: 'Auxiliar de Bienestar', nombre: 'Heidy Carolina Villamizar Mendez' },
            { titulo: 'Auxiliar de Reclutamiento y Selección', nombre: 'Maria Juliana Galviz' },
            { titulo: 'Coord./Analista Estructura de Cargos', nombre: 'Ericka Tatiana Villa Grajales' },
            { titulo: 'Coord./Analista de Tecnología y Marketing', nombre: 'Jairo Andres Ramirez Rojas' },
          ],
        },
      ],
    },
    {
      titulo: 'Área Financiera',
      nombre: '',
      children: [
        { titulo: 'Director Financiero', nombre: 'Alexander Jose Gutierrez Palmar' },
        { titulo: 'Coordinador Financiero', nombre: 'Juan Sánchez Zapata' },
        { titulo: 'Auxiliar Contable', nombre: 'Sara Dahiana Ortiz Gaviria' },
        { titulo: 'Asistente Financiero', nombre: 'Luisa Maria Monsalve' },
      ],
    },
    {
      titulo: 'Área Administrativa',
      nombre: '',
      children: [
        { titulo: 'Director Administrativo', nombre: 'Yeison Alejandro Roas Mosquera' },
        { titulo: 'Analista Administrativa', nombre: 'Angie Tatiana Villa Aldana' },
      ],
    },
    {
      titulo: 'Operación y Servicios',
      nombre: '',
      children: [
        { titulo: 'Auxiliar TICS', nombre: 'Daniel Duque' },
        { titulo: 'Asistente Gestión Documental', nombre: 'Angelica Maria Manso Carrillo' },
        { titulo: 'Auxiliar Gestión Documental (Archivo)', nombre: 'Kimberly Barbosa' },
        { titulo: 'Auxiliar de Calidad', nombre: 'Salome Guzmán Jaramillo' },
        { titulo: 'Auxiliar Atención al Cliente', nombre: 'Yuliana Gomez Mosquera' },
        { titulo: 'Ejecutivo en Ventas', nombre: 'Jessica Lavado Bedoya' },
      ],
    },
  ],
};
