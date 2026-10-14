# Curriculum

Personal landing page showcasing my resume, skills, and projects.

Site bilíngue (PT/EN) feito com **Next.js 16**, **TypeScript** e **Tailwind CSS 4**, com tema claro/escuro e hospedado na **Vercel**.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000. A raiz `/` redireciona para `/pt` ou `/en` conforme o idioma do navegador.

## Editando o conteúdo

Todo o conteúdo do currículo fica em um único arquivo:

- [`src/content/profile.ts`](src/content/profile.ts): nome, resumo, experiências, projetos, competências, formação, idiomas e links.
- [`src/content/ui.ts`](src/content/ui.ts): textos da interface (menu, títulos de seção, botões, descrição para SEO).

Campos no formato `{ pt: "...", en: "..." }` mudam conforme o idioma; strings simples aparecem iguais nas duas versões.

Para adicionar um projeto, inclua um item em `projects`:

```ts
{
  name: { pt: "Nome do projeto", en: "Project name" },
  description: { pt: "Descrição...", en: "Description..." },
  tags: ["Cypress", "TypeScript"],
  repo: "https://github.com/usuario/repositorio",
  demo: "https://exemplo.com", // opcional
},
```

## Personalizando o visual

- **Cores:** variáveis no topo de [`src/app/globals.css`](src/app/globals.css). `:root` é o tema claro e `[data-theme="dark"]` o escuro. A cor de destaque é `--accent`.
- **Tamanho geral do site:** em `globals.css`, o `font-size` do `html` escala textos, espaçamentos e largura juntos (16px, e 16,2px em telas a partir de 1280px).
- **Fontes:** definidas em [`src/app/[lang]/layout.tsx`](src/app/%5Blang%5D/layout.tsx) com `next/font/google`: Plus Jakarta Sans nos títulos (`font-heading`) e Inter no texto (`font-sans`).

## Estrutura

```
src/
  app/
    [lang]/layout.tsx         # layout raiz, metadados, JSON-LD, script de tema
    [lang]/page.tsx           # página única com todas as seções
    [lang]/opengraph-image.tsx# imagem de compartilhamento gerada por idioma
    sitemap.ts, robots.ts, icon.svg
  components/                 # header, seções, toggle de tema, ícones
  content/                    # conteúdo (profile.ts) e textos de interface (ui.ts)
  lib/                        # i18n, URL do site, script de tema
  proxy.ts                    # redireciona / para /pt ou /en
```

## Deploy na Vercel

1. Envie o repositório para o GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório. O framework (Next.js) é detectado automaticamente e não é preciso configurar variáveis de ambiente.
3. Cada push na `main` publica em produção; pull requests geram URLs de preview.

Se usar um domínio próprio, defina `NEXT_PUBLIC_SITE_URL` (ex.: `https://seudominio.com`) nas variáveis de ambiente da Vercel para que sitemap e links de compartilhamento usem o domínio correto. Sem ela, o site usa automaticamente o domínio de produção da Vercel.

## Scripts

| Comando         | O que faz                       |
| --------------- | ------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento     |
| `npm run build` | Build de produção               |
| `npm start`     | Serve o build de produção       |
| `npm run lint`  | ESLint                          |
