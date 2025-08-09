// src/data/projectsData.ts

// Define ProjectDataItem type if not imported from elsewhere
export interface ProjectDataItem {
  title: string;
  timeframe: string;
  projectUrl: string;
  techStack: string[];
  imageSrc: string;
  imageAlt: string;
  description: string;
  isFeatured: boolean;
  homepageSummary: string;
}

export const allProjectsData: ProjectDataItem[] = [
  {
    title: "Formación en Chamanismo Ancestral",
    timeframe: "Desde Octubre 2023",
    projectUrl: "/formacion-edhuco",
    techStack: [
      "Chamanismo",
      "Educación Consciente",
      "Experiencia Transformadora",
    ],
    imageSrc: "/images/projects/formacion-chamanica.png",
    imageAlt: "Círculo chamánico en la naturaleza",
    description: `
      <p>Una formación viva que integra enseñanzas ancestrales, sabiduría espiritual y prácticas contemporáneas. Dirigida a quienes desean explorar su poder interior y recordar su misión en esta tierra.</p>
      <p>Incluye encuentros mensuales, trabajo con elementos, rituales, y acompañamiento grupal.</p>
    `,
    isFeatured: true,
    homepageSummary:
      "Un viaje iniciático a través del chamanismo, el sonido y la educación del alma.",
  },
  {
    title: "Sonidos Ancestrales en Centros Educativos",
    timeframe: "Marzo - Julio 2024",
    projectUrl: "/experiencias#educativo",
    techStack: ["Sound Healing", "Educación Alternativa", "Niños y Jóvenes"],
    imageSrc: "/images/projects/centros-educativos.png",
    imageAlt: "Sesión sonora con niños en un aula",
    description: `
      <p>Sesiones de sonido vibracional en escuelas, orientadas a fomentar la atención plena, la regulación emocional y el bienestar integral en niños, adolescentes y educadores.</p>
    `,
    isFeatured: true,
    homepageSummary:
      "Sembrando semillas de presencia, armonía y sensibilidad en espacios escolares.",
  },
  {
    title: "Retiro de Sanación Chamánica",
    timeframe: "Noviembre 2023",
    projectUrl: "/experiencias#retiro",
    techStack: ["Ritual", "Trabajo con elementos", "Sanación Grupal"],
    imageSrc: "/images/projects/retiro-chamanico.png",
    imageAlt: "Altar con elementos de poder en un círculo ceremonial",
    description: `
      <p>Un encuentro profundo con el alma, en conexión con la naturaleza, la medicina del sonido y los rituales ancestrales.</p>
      <p>Exploramos el silencio, la introspección y la fuerza del círculo como medicina colectiva.</p>
    `,
    isFeatured: true,
    homepageSummary: "Un espacio sagrado para sanar, recordar y reconectar.",
  },
  {
    title: "Conciertos Meditativos",
    timeframe: "2023 - Actualidad",
    projectUrl: "/experiencias#conciertos",
    techStack: ["Sonoterapia", "Instrumentos Ancestrales", "Meditación"],
    imageSrc: "/images/projects/concierto-meditativo.png",
    imageAlt: "Concierto de cuencos y sonidos ancestrales",
    description: `
      <p>Conciertos inmersivos donde el sonido guía a los participantes a estados de meditación profunda, armonización energética y expansión de conciencia.</p>
    `,
    isFeatured: true,
    homepageSummary:
      "Viajes sonoros que abren portales interiores y despiertan memorias dormidas.",
  },
  {
    title: "Alianzas y Colaboraciones",
    timeframe: "Desde 2024",
    projectUrl: "/alianzas",
    techStack: ["Redes", "Colaboraciones", "Cocreación"],
    imageSrc: "/images/projects/colaboracion.png",
    imageAlt: "Manos unidas en círculo ritual",
    description: `
      <p>Participación en encuentros, festivales y espacios terapéuticos junto a proyectos afines como SomRiu, colectivos de educación viva, y espacios de medicina ancestral.</p>
    `,
    isFeatured: true,
    homepageSummary:
      "Tejemos vínculos conscientes que nutren el propósito común.",
  },
];
