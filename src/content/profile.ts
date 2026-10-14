import type { Localized } from "@/lib/i18n";

/**
 * Todo o conteúdo do site fica aqui. Para atualizar o currículo,
 * edite este arquivo: campos com { pt, en } aparecem conforme o idioma.
 */

type Text = string | Localized;

export type Experience = {
  company: string;
  role: Text;
  period: Text;
  location: Text;
  bullets: Localized<string[]>;
  tags?: Text[];
};

export type Education = {
  institution: string;
  course: Text;
  period: Text;
};

export type Project = {
  name: Text;
  description: Text;
  tags: Text[];
  repo?: string;
  demo?: string;
};

export type SkillGroup = {
  title: Text;
  items: Text[];
};

export const profile = {
  name: "Vinicius Corredeira",
  role: {
    pt: "Desenvolvedor de Software",
    en: "Software Developer",
  },
  headline: {
    pt: "Venho da automação de testes e hoje desenvolvo aplicações em JavaScript e TypeScript com a qualidade pensada desde a primeira linha de código.",
    en: "I come from test automation and now build JavaScript and TypeScript applications with quality in mind from the very first line of code.",
  },
  location: {
    pt: "Catanduva – SP, Brasil",
    en: "Catanduva, São Paulo, Brazil",
  },
  email: "vinicorredeira@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/vin%C3%ADcius-corredeira-59554136a/",
    github: "https://github.com/viniciuscorredeira",
  },
  /**
   * PDFs do currículo, em public/cv/. O botão "Baixar currículo" só aparece
   * no site publicado quando o arquivo existe (se faltar um idioma, usa o outro).
   */
  cv: {
    pt: "/cv/curriculo-vinicius-corredeira.pdf",
    en: "/cv/resume-vinicius-corredeira.pdf",
  } satisfies Localized,

  summary: {
    pt: [
      "Sou técnico em Análise e Desenvolvimento de Sistemas e graduando em Engenharia da Computação, com conclusão prevista para Dez/2026. No TCC, desenvolvi o Soletra, uma extensão para Chrome que reconhece o alfabeto de Libras pela câmera, em tempo real.",
      "Profissionalmente, trabalho com qualidade de software: automação de testes end-to-end com Cypress e TypeScript, homologação de releases semanais, documentação funcional e treinamento de usuários, usando IA (Claude Code) para acelerar o trabalho. Também tenho vivência em suporte de TI e atendimento comercial no setor de automação industrial.",
      "Venho da área de QA e hoje busco uma vaga em desenvolvimento, sem fechar as portas para oportunidades em QA. Tenho uma bagagem moderada, mas sou dedicado a tudo aquilo com que me comprometo.",
    ],
    en: [
      "I hold a technical degree in Systems Analysis and Development and I'm finishing a Bachelor's in Computer Engineering, expected in Dec 2026. For my capstone I built Soletra, a Chrome extension that recognizes the Brazilian Sign Language (Libras) alphabet through the webcam in real time.",
      "Professionally, I work in software quality: end-to-end test automation with Cypress and TypeScript, weekly release sign-off, functional documentation and user training, using AI (Claude Code) to speed up the work. I also have a background in IT support and sales in the industrial automation sector.",
      "I come from QA and I'm now looking for a software development role, while staying open to QA opportunities. My experience is still moderate, but I'm dedicated to everything I commit to.",
    ],
  } satisfies Localized<string[]>,

  highlights: [
    { value: { pt: "Libras em tempo real", en: "Real-time Libras" }, label: { pt: "TCC · Soletra", en: "Capstone · Soletra" } },
    { value: "Cypress + TS", label: { pt: "Base em QA", en: "QA background" } },
    { value: { pt: "Inglês B2", en: "English B2" }, label: { pt: "Intermediário avançado", en: "Upper-intermediate" } },
  ] satisfies { value: Text; label: Text }[],

  experience: [
    {
      company: "Integrativa",
      role: { pt: "Assistente de Testes", en: "Test Assistant" },
      period: { pt: "Abr/2025 – Out/2026", en: "Apr 2025 – Oct 2026" },
      location: { pt: "Catanduva – SP · Híbrido", en: "Catanduva, Brazil · Hybrid" },
      bullets: {
        pt: [
          "Desenvolvimento de testes automatizados end-to-end com Cypress e TypeScript, utilizando Claude Code (IA) para acelerar a criação e a manutenção dos cenários de teste.",
          "Homologação e publicação das releases semanais, validando as entregas antes da liberação em produção.",
          "Testes de API com Postman e apoio no uso de Docker, Git/GitHub, Node.js e PostgreSQL no fluxo de qualidade.",
          "Elaboração de manuais e documentação funcional do sistema, tornando as informações claras e acessíveis para usuários e equipes internas.",
          "Condução de treinamentos e apresentações sobre novas funcionalidades, apoiando a adoção do sistema pelos usuários.",
        ],
        en: [
          "Built end-to-end automated tests with Cypress and TypeScript, using Claude Code (AI) to speed up writing and maintaining test scenarios.",
          "Signed off and published weekly releases, validating deliveries before they went to production.",
          "API testing with Postman, and supported the use of Docker, Git/GitHub, Node.js and PostgreSQL in the QA workflow.",
          "Wrote user manuals and functional documentation, making the system clear and accessible to users and internal teams.",
          "Ran training sessions and presentations on new features, helping users adopt the system.",
        ],
      },
      tags: ["Cypress", "TypeScript", "Postman", "Claude Code", "Docker", "PostgreSQL"],
    },
    {
      company: "RMR Agroindustrial",
      role: { pt: "Assistente de TI e Comercial", en: "IT & Sales Assistant" },
      period: { pt: "Out/2023 – Abr/2025", en: "Oct 2023 – Apr 2025" },
      location: { pt: "Catanduva – SP · Presencial", en: "Catanduva, Brazil · On-site" },
      bullets: {
        pt: [
          "Prospecção e atendimento de clientes na venda de produtos de automação industrial das marcas Novus e Bray (controladores, atuadores, transmissores e softwares de interface).",
          "Negociação de valores e condições comerciais, acompanhando o cliente da cotação ao fechamento.",
          "Suporte técnico aos colaboradores e apoio na manutenção da infraestrutura de TI, incluindo ambiente Windows Server.",
        ],
        en: [
          "Prospected and served customers selling Novus and Bray industrial automation products (controllers, actuators, transmitters and HMI software).",
          "Negotiated pricing and commercial terms, following customers from quote to close.",
          "Provided technical support to staff and helped maintain IT infrastructure, including Windows Server.",
        ],
      },
      tags: ["Windows Server", { pt: "Vendas", en: "Sales" }, { pt: "Suporte", en: "Support" }],
    },
    {
      company: "Legião Mirim de Catanduva",
      role: { pt: "Aprendiz", en: "Apprentice" },
      period: { pt: "Mai/2022 – Set/2023", en: "May 2022 – Sep 2023" },
      location: {
        pt: "Secretaria de Esportes – Prefeitura de Catanduva · Presencial",
        en: "Sports Department – Catanduva City Hall · On-site",
      },
      bullets: {
        pt: [
          "Desenvolvimento de pequenas automações em Python para otimizar tarefas do dia a dia do setor.",
          "Suporte às demandas de TI, incluindo crimpagem de cabos de rede e manutenção de hardware.",
          "Apoio à rotina administrativa, controle de documentos e entrega de documentos entre departamentos.",
        ],
        en: [
          "Wrote small Python automations to streamline the department's day-to-day tasks.",
          "Handled IT requests, including network cable crimping and hardware maintenance.",
          "Supported administrative routines, document control and inter-department document delivery.",
        ],
      },
      tags: ["Python", "Hardware"],
    },
  ] satisfies Experience[],

  projects: [
    {
      name: "Soletra — Libras (TCC)",
      description: {
        pt: "Meu TCC: extensão para Chrome e Edge que reconhece pela câmera, em tempo real, as letras e os números do alfabeto manual de Libras e transforma os sinais em texto pesquisável. Todo o processamento é local, sem gravar nem enviar vídeo, e o projeto tem uma suíte com 97 cenários de teste em Node.",
        en: "My undergraduate capstone: a Chrome and Edge extension that recognizes the Brazilian Sign Language (Libras) manual alphabet, letters and numbers, through the webcam in real time and turns the signs into searchable text. Everything runs locally, with no video recorded or sent, and it ships with a 97-scenario test suite in Node.",
      },
      tags: [
        "JavaScript",
        "MediaPipe",
        "WebAssembly",
        { pt: "Visão computacional", en: "Computer vision" },
        { pt: "Extensão Chrome (MV3)", en: "Chrome extension (MV3)" },
      ],
      repo: "https://github.com/viniciuscorredeira/TCC-Soletra",
    },
    {
      name: { pt: "Este portfólio", en: "This portfolio" },
      description: {
        pt: "Landing page bilíngue (PT/EN) com currículo e projetos, tema claro/escuro e conteúdo centralizado em um único arquivo. Publicada na Vercel.",
        en: "Bilingual (PT/EN) landing page with my resume and projects, light/dark theme and all content in a single file. Deployed on Vercel.",
      },
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      repo: "https://github.com/viniciuscorredeira/Curriculum",
    },
  ] satisfies Project[],

  skills: [
    {
      title: { pt: "Desenvolvimento", en: "Development" },
      items: ["TypeScript", "Node.js", "Python", "PostgreSQL", { pt: "Aplicações web", en: "Web applications" }],
    },
    {
      title: { pt: "Automação e Ferramentas", en: "Automation & Tools" },
      items: ["Cypress", "Postman", "Claude Code", "Git", "GitHub", "Docker"],
    },
    {
      title: { pt: "Qualidade de Software", en: "Software Quality" },
      items: [
        { pt: "Testes end-to-end", en: "End-to-end testing" },
        { pt: "Testes de API", en: "API testing" },
        { pt: "Homologação de releases", en: "Release sign-off" },
        { pt: "Documentação de software", en: "Software documentation" },
        { pt: "Garantia da qualidade", en: "Quality assurance" },
      ],
    },
    {
      title: { pt: "Infraestrutura e Suporte", en: "Infrastructure & Support" },
      items: [
        { pt: "Suporte técnico", en: "Technical support" },
        "Windows Server",
        { pt: "Redes", en: "Networking" },
        { pt: "Manutenção de hardware", en: "Hardware maintenance" },
      ],
    },
    {
      title: { pt: "Comportamentais", en: "Soft skills" },
      items: [
        { pt: "Treinamento de usuários", en: "User training" },
        { pt: "Apresentações", en: "Presentations" },
        { pt: "Comunicação", en: "Communication" },
        { pt: "Negociação", en: "Negotiation" },
        { pt: "Vendas", en: "Sales" },
      ],
    },
  ] satisfies SkillGroup[],

  education: [
    {
      institution: "UNILAGO",
      course: { pt: "Bacharelado em Engenharia da Computação", en: "B.Sc. in Computer Engineering" },
      period: { pt: "2022 – 2026 · conclusão prevista em Dez/2026", en: "2022 – 2026 · expected Dec 2026" },
    },
    {
      institution: "ETEC",
      course: {
        pt: "Técnico em Análise e Desenvolvimento de Sistemas",
        en: "Technical Degree in Systems Analysis and Development",
      },
      period: { pt: "Jan/2019 – Dez/2021", en: "Jan 2019 – Dec 2021" },
    },
  ] satisfies Education[],

  /** Tecnologias em estudo, exibidas em Formação. */
  studying: [
    "JavaScript",
    { pt: "HTML e CSS", en: "HTML & CSS" },
    "Next.js",
    "Tailwind CSS",
  ] satisfies Text[],

  languages: [
    {
      name: { pt: "Inglês", en: "English" },
      level: { pt: "Intermediário avançado (B2)", en: "Upper-intermediate (B2)" },
      detail: {
        pt: "My Home Idiomas (desde Jun/2019). Mais de 4 anos de aulas em grupo com foco em conversação; hoje em aulas particulares voltadas à fluência em ambientes profissionais e de tecnologia.",
        en: "My Home Idiomas (since Jun 2019). 4+ years of conversation-focused group classes; now taking private lessons aimed at fluency in professional and tech settings.",
      },
    },
    {
      name: { pt: "Português", en: "Portuguese" },
      level: { pt: "Nativo", en: "Native" },
    },
  ] satisfies { name: Text; level: Text; detail?: Text }[],
};
