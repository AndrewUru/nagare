// src/data/timelineEvents.ts

export interface TimelineEventItem {
  date: string;
  dateRange?: string;
  title: string;
  category: "Experiencias" | "Honores" | "Publicaciones";
  description?: string;
  isHighlight?: boolean;
  highlightSummary?: string;
}

export const allTimelineEvents: TimelineEventItem[] = [
  // EXPERIENCES
  {
    date: "2025-08",
    title: "Expansión del Proyecto EDHUCO",
    category: "Experiencias",
    isHighlight: true,
    highlightSummary: `Nuevas alianzas, círculos sonoros y expansión a nuevos territorios.`,
    description: `<p>El proyecto EDHUCO se expande con más retiros, sesiones y colaboraciones a nivel nacional e internacional.</p>`,
  },
  {
    date: "2024-11",
    title: "Primer Retiro de Sanación Chamánica",
    category: "Experiencias",
    isHighlight: true,
    highlightSummary: `Un encuentro profundo con la naturaleza, el ritual y la medicina del sonido.`,
    description: `<p>Realizado en un entorno natural sagrado, este retiro reunió a almas buscadoras para sanar desde lo ancestral y reencontrarse con su medicina interior.</p>`,
  },
  {
    date: "2024-07",
    dateRange: "Marzo – Julio 2024",
    title: "Círculo Sonoro en Centros Educativos",
    category: "Experiencias",
    description: `<p>Conciertos meditativos, dinámicas de atención plena y experiencias vibracionales con estudiantes y docentes. Un puente entre educación y espiritualidad.</p>`,
  },
  {
    date: "2023-10",
    title: "Inicio de la Formación en Chamanismo",
    category: "Experiencias",
    isHighlight: true,
    highlightSummary: `Una formación viva para recordar, despertar y caminar en coherencia.`,
    description: `<p>Se lanza la primera cohorte de formación EDHUCO, con módulos mensuales y un recorrido por la sabiduría ancestral aplicada al presente.</p>`,
  },

  // HONORS
  {
    date: "2024-12",
    title: "Reconocimiento de Comunidad Educativa Local",
    category: "Honores",
    description: `<p>EDHUCO es reconocido como proyecto transformador en espacios educativos alternativos.</p>`,
  },
  {
    date: "2024-04",
    title: "Alianza con SomRiu",
    category: "Honores",
    isHighlight: true,
    highlightSummary: `Nace una sinergia entre el sonido y la medicina del cuerpo.`,
    description: `<p>Colaboración con SomRiu para ofrecer experiencias combinadas de terapia de sonido y movimiento somático.</p>`,
  },

  // PUBLICATIONS
  {
    date: "2025-06",
    title: "Publicación: Sonido, Rito y Educación Viva",
    category: "Publicaciones",
    isHighlight: true,
    highlightSummary: `Ensayo sobre cómo el sonido puede ser medicina en procesos educativos.`,
    description: `<p>Publicado en una revista independiente de pedagogía alternativa, explora la integración del ritual sonoro como herramienta educativa.</p>`,
  },
];
