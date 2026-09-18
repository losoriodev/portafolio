import type { L } from '../i18n/ui';

// ─────────────────────────────────────────────────────────────
// Todo el contenido del portafolio vive aquí. Edita este archivo
// y las dos páginas (ES / EN) se actualizan solas.
// Los campos marcados TODO son los que no salían en tu LinkedIn.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Luis Osorio',
  handle: 'luis',
  role: { es: 'AI Engineer & Software Architect', en: 'AI Engineer & Software Architect' } as L,
  location: { es: 'Armenia, Quindío, Colombia', en: 'Armenia, Quindío, Colombia' } as L,
  tagline: {
    es: 'Diseño e implemento sistemas inteligentes con IA generativa, arquitecturas multi-agente y tecnologías full-stack modernas, listos para producción.',
    en: 'I design and implement production-ready intelligent systems with generative AI, multi-agent architectures and modern full-stack technologies.',
  } as L,
  highlights: ['AI Agents', 'RAG', 'OpenAI / Claude', 'Next.js / TypeScript', 'Python', 'AWS'],
  email: 'luisjavierosorio3@gmail.com',
  linkedin: 'https://www.linkedin.com/in/luisosorio-76b8b213a',
  github: 'https://github.com/TODO', // TODO: tu usuario de GitHub
  website: 'https://fitcoachai.co',
  avatar: '/avatar.svg', // Reemplaza por /avatar.png (o .webp) con tu foto/ilustración
};

export const about = {
  paragraphs: [
    {
      es: 'Soy AI Engineer y arquitecto de software especializado en diseñar e implementar sistemas inteligentes con IA generativa, arquitecturas multi-agente y tecnologías full-stack modernas. Construyo soluciones de IA escalables y listas para producción con OpenAI, Claude, Amazon Bedrock y prompt engineering avanzado.',
      en: 'I am an AI Engineer and Software Architect specializing in designing and implementing intelligent systems with generative AI, multi-agent architectures and modern full-stack technologies. I build scalable, production-ready AI solutions with OpenAI, Claude, Amazon Bedrock and advanced prompt engineering.',
    },
    {
      es: 'He desarrollado features de producto con IA como agentes autónomos, implementaciones RAG e infraestructuras de comunicación con IA, integrando estas capacidades en plataformas complejas: CRMs, APIs de redes sociales (LinkedIn, Google Ads), chatbots y sistemas de generación de imágenes. Base sólida en TypeScript, Python, Next.js y Node.js, con clean architecture, DDD y optimización de rendimiento.',
      en: 'I have shipped AI product features such as autonomous agents, RAG implementations and AI communication infrastructure, integrating them into complex platforms: CRMs, social media APIs (LinkedIn, Google Ads), chatbots and image generation systems. Strong background in TypeScript, Python, Next.js and Node.js, with clean architecture, DDD and performance optimization.',
    },
    {
      es: 'Además fundé FitCoach AI, una app de entrenamiento personal potenciada por IA y basada en ciencia del ejercicio. Abierto a conectar con otros ingenieros y a construir algo con impacto.',
      en: 'I also founded FitCoach AI, an AI-powered personal training app grounded in exercise science. Open to connecting with fellow engineers and building something impactful.',
    },
  ] as L[],
  facts: {
    location: 'Armenia, Colombia',
    focus: ['Generative AI', 'Multi-agent systems', 'Clean Architecture'],
    editor: 'Cursor + Claude Code',
    status: { es: 'AI Engineer @ Blossom · Founder @ FitCoach AI', en: 'AI Engineer @ Blossom · Founder @ FitCoach AI' } as L,
  },
};

export type Job = {
  period: L;
  role: L;
  company: string;
  url?: string;
  location?: string;
  description: L;
  tags: string[];
};

export const experience: Job[] = [
  {
    period: { es: 'Feb 2023 — Presente', en: 'Feb 2023 — Present' },
    role: { es: 'Senior Software Developer & AI Engineer', en: 'Senior Software Developer & AI Engineer' },
    company: 'Blossom',
    location: 'Remoto',
    description: {
      es: 'Arquitecto y desarrollo aplicaciones full-stack con Next.js, TypeScript, Node.js y Python. Implemento features con IA usando OpenAI, Claude y frameworks agénticos: agentes autónomos, RAG e infraestructura de comunicación con IA. Diseño y despliego microservicios escalables con GraphQL/Apollo y arquitectura serverless en AWS, aplicando clean architecture y DDD sobre PostgreSQL y MongoDB.',
      en: 'I architect and build full-stack applications with Next.js, TypeScript, Node.js and Python. I ship AI-powered features using OpenAI, Claude and agentic frameworks: autonomous agents, RAG and AI communication infrastructure. I design and deploy scalable microservices with GraphQL/Apollo and serverless architecture on AWS, applying clean architecture and DDD over PostgreSQL and MongoDB.',
    },
    tags: ['AI Agents', 'RAG', 'OpenAI', 'Claude', 'Next.js', 'TypeScript', 'Python', 'GraphQL', 'AWS'],
  },
  {
    period: { es: 'Feb 2026 — Presente', en: 'Feb 2026 — Present' },
    role: { es: 'Founder & CEO', en: 'Founder & CEO' },
    company: 'FitCoach AI',
    url: 'https://fitcoachai.co',
    location: 'Colombia',
    description: {
      es: 'App de entrenamiento personal potenciada por IA y basada en ciencia del ejercicio. Periodización automática, planificación inteligente de nutrición y seguimiento de entrenamientos en tiempo real. Construida con React Native, TypeScript y Supabase.',
      en: 'AI-powered personal training app built on exercise science. Automatic periodization, intelligent nutrition planning and real-time workout tracking. Built with React Native, TypeScript and Supabase.',
    },
    tags: ['React Native', 'TypeScript', 'Supabase', 'LLMs', 'Product'],
  },
  {
    period: { es: 'Feb 2021 — Feb 2023', en: 'Feb 2021 — Feb 2023' },
    role: { es: 'Software Developer', en: 'Software Developer' },
    company: 'HelloBUILD',
    location: 'Miami, FL (remoto)',
    description: {
      es: 'Desarrollo full-stack con Node.js, React, React Native y TypeScript. Implementé APIs REST y GraphQL para web y móvil, construí apps multiplataforma con React Native y Flutter, integré servicios de terceros y participé en code reviews manteniendo altos estándares de calidad.',
      en: 'Full-stack development with Node.js, React, React Native and TypeScript. Implemented REST and GraphQL APIs for web and mobile, built cross-platform apps with React Native and Flutter, integrated third-party services and took part in code reviews upholding high quality standards.',
    },
    tags: ['Node.js', 'React', 'React Native', 'Flutter', 'GraphQL', 'TypeScript'],
  },
  {
    period: { es: 'Jun 2020 — Feb 2021', en: 'Jun 2020 — Feb 2021' },
    role: { es: 'Ingeniero de Software', en: 'Software Engineer' },
    company: 'Celuweb',
    location: 'Colombia',
    description: {
      es: 'Desarrollo de aplicaciones web con Node.js, .NET Core y frameworks modernos de JavaScript. Servicios backend y APIs enfocados en rendimiento y escalabilidad, en colaboración con diseño y producto.',
      en: 'Web application development with Node.js, .NET Core and modern JavaScript frameworks. Backend services and APIs focused on performance and scalability, in collaboration with design and product teams.',
    },
    tags: ['Node.js', '.NET Core', 'JavaScript', 'REST APIs'],
  },
];

export type Project = {
  name: string;
  url?: string;
  repo?: string;
  kind: L;
  description: L;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: 'FitCoach AI',
    url: 'https://fitcoachai.co',
    kind: { es: 'Producto', en: 'Product' },
    description: {
      es: 'Entrenador personal con IA basado en ciencia del ejercicio: periodización automática, nutrición inteligente y tracking en tiempo real.',
      en: 'AI personal trainer grounded in exercise science: automatic periodization, intelligent nutrition and real-time tracking.',
    },
    tags: ['React Native', 'TypeScript', 'Supabase', 'LLMs'],
  },
  // TODO: agrega más proyectos (agentes, herramientas internas, open source…)
];

export type SkillGroup = { title: L; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: { es: 'IA & Machine Learning', en: 'AI & Machine Learning' },
    items: ['Generative AI', 'AI Agents', 'RAG', 'MCP', 'Prompt Engineering', 'OpenAI API', 'Anthropic Claude', 'Claude Code', 'Amazon Bedrock', 'Langfuse', 'TensorFlow'],
  },
  {
    title: { es: 'Backend & Arquitectura', en: 'Backend & Architecture' },
    items: ['Node.js', 'Python', 'NestJS', 'Express', 'Hono', 'GraphQL / Apollo', 'REST APIs', '.NET Core', 'Clean Architecture', 'DDD', 'Microservices'],
  },
  {
    title: { es: 'Frontend & Mobile', en: 'Frontend & Mobile' },
    items: ['Next.js', 'React', 'React Native', 'TypeScript', 'Flutter', 'Tailwind CSS', 'Astro'],
  },
  {
    title: { es: 'Datos, Cloud & DevOps', en: 'Data, Cloud & DevOps' },
    items: ['PostgreSQL', 'MongoDB', 'Supabase', 'AWS', 'Serverless', 'Vercel', 'Railway', 'Docker', 'Git', 'CI/CD'],
  },
];

export const certifications: { name: string; issuer?: string; year?: string }[] = [
  { name: 'AWS Generative AI and AI Agents with Amazon Bedrock', issuer: 'Amazon Web Services', year: 'Dec 2025' },
  { name: 'Claude Code in Action', issuer: 'Anthropic', year: 'Jan 2026' },
  { name: 'Introduction to TensorFlow for AI, ML and Deep Learning', issuer: 'DeepLearning.AI', year: 'Jan 2026' },
  { name: 'AI generativa más allá del chatbot', issuer: 'Google Cloud', year: 'Dec 2025' },
  { name: 'Professional Software Architecture Course', issuer: 'Platzi', year: 'May 2025' },
  { name: 'Clean Architectures for Software Development', issuer: 'Platzi', year: 'May 2025' },
  { name: 'Advanced Node.js Development', issuer: 'Platzi', year: 'Jun 2025' },
  { name: 'Scalable Backend Development with NestJS', issuer: 'Udemy', year: 'Jun 2025' },
  { name: 'Backend Development with Node.js', issuer: 'Platzi', year: 'Jun 2025' },
];

export const education = [
  {
    school: 'Universidad del Quindío',
    degree: { es: 'Ingeniería de Sistemas y Computación', en: 'B.Eng. in Systems & Computer Engineering' } as L,
    period: '2016 — 2022',
  },
];
