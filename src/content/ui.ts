import type { Locale } from "@/lib/i18n";

const ui = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Competências",
      education: "Formação",
      contact: "Contato",
    },
    hero: {
      contact: "Entrar em contato",
      available: "Em busca de oportunidades em desenvolvimento e QA",
    },
    sections: {
      about: "Sobre mim",
      experience: "Experiência profissional",
      projects: "Projetos",
      skills: "Competências técnicas",
      education: "Formação acadêmica",
      languages: "Idiomas",
      studying: "Estudando atualmente",
      contact: "Vamos conversar",
    },
    projects: { repo: "Código", demo: "Ver online" },
    cv: { download: "Baixar currículo" },
    contact: {
      text: "Estou em busca de oportunidades em desenvolvimento e QA. Se tiver uma vaga ou quiser conversar, me mande uma mensagem pelo canal que preferir.",
      email: "Enviar e-mail",
    },
    a11y: {
      menu: "Abrir menu",
      closeMenu: "Fechar menu",
      theme: "Alternar tema claro/escuro",
      language: "Mudar idioma",
      skip: "Pular para o conteúdo",
      mainNav: "Navegação principal",
    },
    footer: "Feito com Next.js e hospedado na Vercel.",
    notFound: { title: "Página não encontrada", back: "Voltar para o início" },
    meta: {
      description:
        "Vinicius Corredeira, Desenvolvedor de Software com base em QA, em busca de oportunidades em desenvolvimento e QA. JavaScript, TypeScript, Node.js e Cypress.",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      contact: "Get in touch",
      available: "Open to software development and QA roles",
    },
    sections: {
      about: "About me",
      experience: "Work experience",
      projects: "Projects",
      skills: "Technical skills",
      education: "Education",
      languages: "Languages",
      studying: "Currently studying",
      contact: "Let's talk",
    },
    projects: { repo: "Code", demo: "Live demo" },
    cv: { download: "Download resume" },
    contact: {
      text: "I'm looking for opportunities in software development and QA. If you have an opening or just want to talk, reach out through whichever channel you prefer.",
      email: "Send an email",
    },
    a11y: {
      menu: "Open menu",
      closeMenu: "Close menu",
      theme: "Toggle light/dark theme",
      language: "Change language",
      skip: "Skip to content",
      mainNav: "Main navigation",
    },
    footer: "Built with Next.js and hosted on Vercel.",
    notFound: { title: "Page not found", back: "Back to home" },
    meta: {
      description:
        "Vinicius Corredeira, Software Developer with a QA background, open to software development and QA roles. JavaScript, TypeScript, Node.js and Cypress.",
    },
  },
} satisfies Record<Locale, unknown>;

export type Dictionary = (typeof ui)["pt"];

export const getDictionary = (lang: Locale): Dictionary => ui[lang];
