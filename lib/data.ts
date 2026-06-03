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
    company: "V-Nova Tech",
    role: "Desenvolvedor Full Stack",
    period: "Nov/2025 — Atual",
    location: "Remoto",
    current: true,
    description:
      "Construção de APIs REST escaláveis com NestJS em arquitetura hexagonal, aplicando Clean Architecture e separação de responsabilidades. Implementação de CQRS e Domain Events com publicação assíncrona via RabbitMQ, garantindo consistência eventual entre serviços. Autenticação completa com JWT, guards, roles e permissões granulares. Modelagem relacional com PostgreSQL via Prisma, cache com Redis e transações atômicas. Observabilidade com OpenTelemetry propagando correlationId ponta a ponta. Testes com Vitest, Testing Library, MSW e Playwright E2E com cobertura acima de 80%.",
    tags: ["NestJS", "Node.js", "TypeScript", "React", "PostgreSQL", "RabbitMQ", "Redis", "CQRS", "OpenTelemetry", "Playwright"],
  },
  {
    id: 2,
    company: "EvolutionSoft",
    role: "Desenvolvedor Frontend",
    period: "Mai/2025 — Nov/2025",
    location: "Itapetininga, SP · Híbrido",
    current: false,
    description:
      "Desenvolvimento de interfaces modernas e responsivas com React.js, Next.js, TypeScript e Tailwind CSS, priorizando acessibilidade e consistência visual. Gerenciamento de estado avançado com Zustand, Context API e React Query. Manutenção de aplicações Angular e React Native, corrigindo inconsistências entre iOS e Android. Transformação de protótipos Figma em componentes reutilizáveis com foco em UI/UX. Integração com APIs REST com tratamento de erros e otimização de chamadas assíncronas.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "React Query", "Angular", "React Native", "Figma"],
  },
  {
    id: 3,
    company: "Grupo Ita Aços",
    role: "Desenvolvedor Full Stack",
    period: "Mar/2024 — Mai/2025",
    location: "Itapetininga, SP · Presencial",
    current: false,
    description:
      "Desenvolvimento de sistema de inventário com geração de QR codes e integração com MySQL. Otimização de queries SQL reduzindo tempo de resposta em até 40% via indexação e refatoração. Implementação de sistema de controle de cronograma de produção de colunas de ferro, automatizando gestão de orçamentos. Integração de APIs externas e administração de servidor Linux. Automação de processos internos com JavaScript, jQuery e PHP, aumentando produtividade da equipe.",
    tags: ["PHP", "JavaScript", "jQuery", "MySQL", "Linux"],
  },
  {
    id: 4,
    company: "Fatec Itapetininga",
    role: "Monitor de Linguagem de Programação",
    period: "Ago/2022 — Dez/2022",
    location: "Presencial · Voluntário",
    current: false,
    description:
      "Apoio a colegas com dificuldades em lógica de programação, orientação a objetos e boas práticas de escrita de código.",
    tags: ["Ensino", "Lógica de Programação", "OOP"],
  },
];

export const projects = [
  {
    id: 1,
    name: "Verdeo",
    subtitle: "Ecossistema de Microserviços",
    description:
      "Estudo arquitetural de um ecossistema de microserviços com comunicação síncrona (HTTP/BFF) e assíncrona (RabbitMQ), consistência eventual via Saga Pattern e mecanismos de compensação. Isolamento de domínio com arquitetura hexagonal e tratamento explícito de erros com Result Type.",
    tags: ["NestJS", "RabbitMQ", "CQRS", "Circuit Breaker", "Hexagonal Architecture", "Testcontainers", "Next.js", "Docker", "PostgreSQL", "Redis"],
    github: "https://github.com/oJotagee/Verdeo",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    name: "EzMotoFlow",
    subtitle: "Sistema de Gestão de Vendas de Motos",
    description:
      "Sistema completo de gestão de vendas com autenticação por perfil, controle de estoque e deploy em produção. Design system com Shadcn/UI e Tailwind garantindo consistência visual. API REST com NestJS e PostgreSQL na nuvem, desenvolvido de ponta a ponta.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Shadcn/UI", "NestJS", "PostgreSQL", "Vercel"],
    github: "https://github.com/oJotagee/EzMotoFlow",
    demo: "https://ez-moto-flow-8ika.vercel.app",
    featured: true,
  },
  {
    id: 3,
    name: "Kanban Board",
    subtitle: "Gerenciador de Tarefas",
    description:
      "Gerenciador de tarefas com interface drag-and-drop, formulários validados com Zod e integração com API via Axios. Backend com NestJS + Fastify, containerização completa com Docker e PostgreSQL.",
    tags: ["React", "Tailwind CSS", "NestJS", "Fastify", "PostgreSQL", "Drizzle ORM", "Zod", "Docker"],
    github: "https://github.com/oJotagee/To-do",
    demo: null,
    featured: false,
  },
  {
    id: 4,
    name: "Blogger",
    subtitle: "Plataforma de Blog com Testes Automatizados",
    description:
      "Plataforma de blog desenvolvida como projeto de treinamento com foco em consolidar boas práticas de construção de interfaces e arquitetura de APIs. Cobre o ciclo completo de uma aplicação real: autenticação de usuários, CRUD de posts, estilização com Styled Components e testes unitários e de integração com Jest.",
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
