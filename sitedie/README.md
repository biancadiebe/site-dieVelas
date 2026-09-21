This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

# DieVelas

Loja virtual de velas veganas e artesanais, criada para a marca **DieVelas**.

Este projeto também funciona como um ambiente de estudo e prática de ferramentas modernas para desenvolvimento web, com foco em Next.js, React, TypeScript, organização de componentes, filtros de catálogo e publicação na Vercel.

## Acesse o projeto

[Ver DieVelas na Vercel](https://site-die-velas-iac3-77w9c1gbw-diebe.vercel.app)

## Sobre o projeto

A DieVelas apresenta produtos artesanais com diferentes aromas, tamanhos e opções personalizadas. A aplicação foi pensada para simular uma experiência de catálogo de uma loja real, desde a descoberta dos produtos até a solicitação de encomenda pelo WhatsApp.

## Funcionalidades

- Catálogo de velas clássicas, especiais e personalizadas.
- Busca por nome do produto ou aroma.
- Filtros por tipo, aroma e preço.
- Página de detalhes para cada produto.
- Seleção de tamanho, quantidade e aroma em produtos personalizados.
- Galeria de imagens em produtos com variações.
- Cálculo do menor preço para pacotes personalizados.
- Sugestões de outros produtos na página de detalhes.
- Botão de encomenda pelo WhatsApp.
- Layout responsivo para desktop e dispositivos móveis.

## Tecnologias

- Next.js 16 com App Router
- React 19
- TypeScript
- CSS Modules
- React Icons
- Vercel

## Como executar localmente

Pré-requisitos: Node.js e npm instalados.

```bash
npm install
npm run dev
```

Depois, acesse [http://localhost:3000](http://localhost:3000).

## Outros comandos

```bash
npm run build  # cria a build de produção
npm run start  # inicia a aplicação em produção
npm run lint   # verifica problemas de lint
```

## Estrutura principal

```text
app/                 Páginas e rotas da aplicação
	catalogo/          Catálogo e páginas individuais dos produtos
public/imagens/      Imagens das velas
src/components/      Componentes reutilizáveis da interface
src/data/             Produtos e valores dos pacotes personalizados
```

## Objetivos de estudo

Este projeto foi desenvolvido para praticar:

- Componentização e reutilização com React.
- Rotas dinâmicas e navegação com Next.js.
- Tipagem de dados com TypeScript.
- Gerenciamento de estado e filtros no cliente.
- Responsividade com CSS Modules.
- Integração de imagens, links e ícones.
- Deploy e atualização de uma aplicação na Vercel.