# Portfolio — João Guilherme Santos Oliveira

**Live:** [portfolio-blue-five-30.vercel.app](https://portfolio-blue-five-30.vercel.app/pt)

Portfolio pessoal desenvolvido com Next.js 16, Tailwind CSS v4 e next-intl. Apresenta experiência profissional, projetos, stack técnica e informações de contato.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Estilização:** Tailwind CSS v4
- **i18n:** next-intl (pt / en)
- **Ícones:** react-icons, lucide-react
- **Animação:** react-type-animation
- **Deploy:** Vercel

## Rodando localmente

```bash
yarn install
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura

```
app/
  [locale]/         # Rotas com suporte a pt/en
    components/     # Hero, Experience, Projects, Stack, Contact, Footer, Navbar
    page.tsx
    layout.tsx
lib/
  data.ts           # Dados de perfil, experiências, projetos e stack
messages/
  pt.json           # Traduções em português
  en.json           # Traduções em inglês
```
