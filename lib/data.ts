export const profile = {
  name: "João Guilherme",
  lastName: "Santos Oliveira",
  title: "Desenvolvedor Full Stack",
  location: "Itapetininga, SP — Remoto",
  email: "joaosantos123433@gmail.com",
  phone: "(15) 99681-5807",
  linkedin: "linkedin.com/in/ojoao-oliveira",
  github: "github.com/oJotagee",
  yearsExperience: 2,
  projectsDelivered: 10,
};

export const experiences = [
  {
    id: 1,
    key: "vnova",
    company: "V-Nova Tech",
    current: true,
    tags: ["NestJS", "Node.js", "TypeScript", "React", "PostgreSQL", "RabbitMQ", "Redis", "CQRS", "OpenTelemetry", "Playwright"],
  },
  {
    id: 2,
    key: "evolutionsoft",
    company: "EvolutionSoft",
    current: false,
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "React Query", "Angular", "React Native", "Figma"],
  },
  {
    id: 3,
    key: "itaacos",
    company: "Grupo Ita Aços",
    current: false,
    tags: ["PHP", "JavaScript", "jQuery", "MySQL", "Linux"],
  },
  {
    id: 4,
    key: "fatec",
    company: "Fatec Itapetininga",
    current: false,
    tags: ["Teaching", "Programming Logic", "OOP"],
  },
];

export const projects = [
  {
    id: 1,
    key: "verdeo",
    name: "Verdeo",
    tags: ["NestJS", "RabbitMQ", "CQRS", "Circuit Breaker", "Hexagonal Architecture", "Testcontainers", "Next.js", "Docker", "PostgreSQL", "Redis"],
    github: "https://github.com/oJotagee/Verdeo",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    key: "ezmotoflow",
    name: "EzMotoFlow",
    tags: ["React", "TypeScript", "Tailwind CSS", "Shadcn/UI", "NestJS", "PostgreSQL", "Vercel"],
    github: "https://github.com/oJotagee/EzMotoFlow",
    demo: "https://ez-moto-flow-8ika.vercel.app",
    featured: true,
  },
  {
    id: 3,
    key: "kanban",
    name: "Kanban Board",
    tags: ["React", "Tailwind CSS", "NestJS", "Fastify", "PostgreSQL", "Drizzle ORM", "Zod", "Docker"],
    github: "https://github.com/oJotagee/To-do",
    demo: null,
    featured: false,
  },
  {
    id: 4,
    key: "blogger",
    name: "Blogger",
    tags: ["React", "TypeScript", "Styled Components", "NestJS", "PostgreSQL", "Jest"],
    github: "https://github.com/oJotagee/blogger",
    demo: null,
    featured: false,
  },
];

export const stack = {
  frontend: [
    { name: "React.js", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Angular", icon: "SiAngular" },
    { name: "React Native", icon: "SiReact" },
  ],
  backend: [
    { name: "NestJS", icon: "SiNestjs" },
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express.js", icon: "SiExpress" },
    { name: "Fastify", icon: "SiFastify" },
    { name: "RabbitMQ", icon: "SiRabbitmq" },
    { name: "React Query", icon: "SiReactquery" },
    { name: "JWT / Auth", icon: null },
  ],
  databases: [
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "MySQL", icon: "SiMysql" },
    { name: "Redis", icon: "SiRedis" },
    { name: "Prisma ORM", icon: "SiPrisma" },
    { name: "Drizzle ORM", icon: "SiDrizzle" },
  ],
  devops: [
    { name: "Docker", icon: "SiDocker" },
    { name: "Git / GitHub", icon: "SiGithub" },
    { name: "Firebase", icon: "SiFirebase" },
    { name: "Vitest", icon: "SiVitest" },
    { name: "CI/CD", icon: null },
    { name: "OpenTelemetry", icon: null },
  ],
};
