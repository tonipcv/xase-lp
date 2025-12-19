# XASE - Documentação Completa do Sistema

**Versão:** 0.1.0  
**Última Atualização:** 15 de Dezembro de 2025  
**Stack Principal:** Next.js 15.1.0 + React 19 + TypeScript + Prisma + PostgreSQL

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Arquitetura do Sistema](#arquitetura-do-sistema)
3. [Stack Tecnológico](#stack-tecnológico)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Banco de Dados](#banco-de-dados)
6. [Páginas e Rotas](#páginas-e-rotas)
7. [Componentes](#componentes)
8. [APIs e Serviços](#apis-e-serviços)
9. [Fluxos de Funcionamento](#fluxos-de-funcionamento)
10. [Configurações](#configurações)
11. [Deploy e Infraestrutura](#deploy-e-infraestrutura)
12. [Roadmap e Próximos Passos](#roadmap-e-próximos-passos)

---

## 🎯 Visão Geral

### O que é o XASE?

O XASE é uma **plataforma multi-produto** que atualmente opera em três frentes principais:

1. **Evidence Layer for AI Agents** (Página Principal - `/`)
   - Posicionamento: Infraestrutura de compliance e auditoria para decisões de IA
   - Público-alvo: Fintechs, Healthcare, Enterprise (mercados regulados)
   - Proposta de valor: Transformar decisões automatizadas em registros legais imutáveis

2. **CRM Completo para WhatsApp com IA** (Página Backup - `/backup`)
   - Solução de atendimento multicanal (WhatsApp, Messenger, Instagram, Email, Telegram)
   - Gestão centralizada de tickets, filas e agentes
   - Integração com múltiplos modelos de IA (GPT, Gemini, Claude, etc.)

3. **Landing Pages de Conversão** (Inside Sales, White Label, Vamos)
   - Funis de captura de leads com formulários multi-step
   - Integração com WhatsApp para follow-up
   - Diferentes temas visuais (dark, light, minimal)

### Objetivo Atual

O sistema está em **fase de validação de mercado**, testando diferentes propostas de valor através de landing pages otimizadas para conversão e SEO.

---

## 🏗️ Arquitetura do Sistema

### Arquitetura Geral

```
┌─────────────────────────────────────────────────────────────┐
│                     FRONTEND (Next.js 15)                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Landing     │  │  Inside      │  │  Chat        │      │
│  │  Pages       │  │  Sales       │  │  Widget      │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    API ROUTES (Edge Runtime)                 │
│  ┌──────────────┐  ┌──────────────┐                         │
│  │  /api/leads  │  │ /api/messages│                         │
│  └──────────────┘  └──────────────┘                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    PRISMA ORM (Client)                       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              PostgreSQL Database (Remote)                    │
│         postgres://zpro:***@dpbdp1.easypanel.host:2123      │
└─────────────────────────────────────────────────────────────┘
```

### Padrão de Renderização

- **SSG (Static Site Generation)**: Todas as landing pages (`/`, `/backup`, `/inside-sales`, `/white`, `/vamos`, `/seo`)
- **Edge Runtime**: APIs (`/api/leads`, `/api/messages`) para baixa latência
- **Client Components**: Componentes interativos (ChatWidget, Modal, formulários)

---

## 🛠️ Stack Tecnológico

### Frontend

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **Next.js** | 15.1.0 | Framework React com App Router |
| **React** | 19.0.0 | Biblioteca UI |
| **TypeScript** | 5.x | Tipagem estática |
| **Tailwind CSS** | 3.4.1 | Estilização utility-first |
| **Framer Motion** | 12.6.5 | Animações e transições |
| **Lucide React** | 0.468.0 | Ícones modernos |
| **Heroicons** | 2.2.0 | Ícones adicionais |
| **Recharts** | 2.15.2 | Gráficos e dashboards |

### Backend

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **Prisma** | 5.10.2 | ORM para PostgreSQL |
| **PostgreSQL** | - | Banco de dados relacional |
| **Edge Runtime** | - | Execução de APIs serverless |

### Fontes Tipográficas

- **Inter**: Usado na página principal (Evidence Layer)
- **Lora**: Usado em páginas minimalistas (SEO)
- **Montserrat**: Fonte global padrão (weights: 100-500)

### DevOps & Deploy

- **Vercel**: Plataforma de deploy (configurado via `vercel.json`)
- **Git**: Controle de versão (GitHub: `tonipcv/xase-lp`)
- **ESLint**: Linting (Next.js config)
- **PostCSS**: Processamento CSS

---

## 📁 Estrutura do Projeto

```
super-xase/
├── src/
│   ├── app/                          # App Router (Next.js 15)
│   │   ├── page.tsx                  # Home: Evidence Layer for AI Agents
│   │   ├── layout.tsx                # Layout global + metadata SEO
│   │   ├── globals.css               # Estilos globais + Tailwind
│   │   ├── sitemap.ts                # Sitemap XML dinâmico
│   │   ├── backup/
│   │   │   └── page.tsx              # CRM WhatsApp com IA (versão completa)
│   │   ├── inside-sales/
│   │   │   └── page.tsx              # Funil de conversão (dark theme)
│   │   ├── white/
│   │   │   └── page.tsx              # Funil de conversão (light theme)
│   │   ├── vamos/
│   │   │   └── page.tsx              # Landing: Guia de Recrutamento com IA
│   │   ├── seo/
│   │   │   └── page.tsx              # Landing: AI Search Analytics
│   │   └── api/
│   │       ├── leads/
│   │       │   └── route.ts          # POST /api/leads (criar lead)
│   │       └── messages/
│   │           └── route.ts          # POST /api/messages (salvar mensagem)
│   ├── components/
│   │   ├── ChatWidget.tsx            # Widget de chat flutuante
│   │   ├── ChatMessage.tsx           # Componente de mensagem individual
│   │   └── Modal.tsx                 # Modal reutilizável
│   ├── lib/
│   │   └── prisma.ts                 # Cliente Prisma singleton
│   └── services/
│       └── leadService.ts            # Serviço de leads (client-side)
├── prisma/
│   └── schema.prisma                 # Schema do banco de dados
├── public/                           # Assets estáticos
├── .env                              # Variáveis de ambiente
├── package.json                      # Dependências
├── tsconfig.json                     # Configuração TypeScript
├── tailwind.config.ts                # Configuração Tailwind
├── next.config.ts                    # Configuração Next.js
├── vercel.json                       # Configuração Vercel
└── README.md                         # Documentação básica
```

---

## 🗄️ Banco de Dados

### Conexão

- **Provider**: PostgreSQL
- **Host**: `dpbdp1.easypanel.host:2123`
- **Database**: `zpro`
- **SSL**: Desabilitado (`sslmode=disable`)
- **Conexão**: Gerenciada via Prisma Client

### Schema (Prisma)

```prisma
model Lead {
  id        String        @id @default(cuid())
  name      String
  whatsapp  String
  email     String
  segment   String
  budget    String
  createdAt DateTime      @default(now())
  updatedAt DateTime      @updatedAt
  messages  ChatMessage[]
}

model ChatMessage {
  id        String   @id @default(cuid())
  leadId    String
  text      String
  isUser    Boolean
  createdAt DateTime @default(now())
  lead      Lead     @relation(fields: [leadId], references: [id])
}
```

### Entidades

#### **Lead**
Representa um lead capturado através dos formulários.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | String (CUID) | Identificador único |
| `name` | String | Nome do lead |
| `whatsapp` | String | Número de WhatsApp |
| `email` | String | Email corporativo |
| `segment` | String | Segmento de negócio |
| `budget` | String | Orçamento mensal |
| `createdAt` | DateTime | Data de criação |
| `updatedAt` | DateTime | Última atualização |
| `messages` | ChatMessage[] | Mensagens relacionadas |

#### **ChatMessage**
Armazena mensagens trocadas no ChatWidget.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | String (CUID) | Identificador único |
| `leadId` | String | FK para Lead |
| `text` | String | Conteúdo da mensagem |
| `isUser` | Boolean | `true` se enviada pelo usuário |
| `createdAt` | DateTime | Timestamp da mensagem |

---

## 🌐 Páginas e Rotas

### Mapa de Rotas

| Rota | Arquivo | Tipo | Descrição |
|------|---------|------|-----------|
| `/` | `app/page.tsx` | SSG | **Evidence Layer for AI Agents** - Landing principal (YC/a16z style) |
| `/backup` | `app/backup/page.tsx` | SSG | **CRM WhatsApp** - Página completa com dashboard e features |
| `/inside-sales` | `app/inside-sales/page.tsx` | SSG | **Funil de conversão** (dark theme, 10 steps) |
| `/white` | `app/white/page.tsx` | SSG | **Funil de conversão** (light theme, 10 steps) |
| `/vamos` | `app/vamos/page.tsx` | SSG | **Landing: Guia de Recrutamento com IA** |
| `/seo` | `app/seo/page.tsx` | SSG | **Landing: AI Search Analytics** |
| `/sitemap.xml` | `app/sitemap.ts` | Dynamic | Sitemap XML para SEO |

### Detalhamento das Páginas

#### 1. **`/` - Evidence Layer for AI Agents**

**Objetivo**: Posicionar Xase como infraestrutura de compliance para IA em mercados regulados.

**Estrutura**:
- **Hero**: Headline "The Evidence Layer for AI Agents" + email capture
- **Visual Hero**: Diagrama Input → Processing → Xase Record (glassmorphism)
- **Problem Statement**: "Logs are not Evidence" (split screen: old vs new)
- **Developer Ergonomics**: Code snippet Python (3 linhas de integração)
- **Use Cases**: Fintech, Healthcare, Enterprise (bento grid)
- **Trust Signals**: EU AI Act, GDPR, SOC2, ISO 42001
- **Manifesto**: Visão sobre trust vs intelligence
- **Final CTA**: Email capture + links (Manifesto, Security, API Docs)

**Design**:
- Background: `#16181b`
- Font: Inter (sans-serif técnico)
- Accent: Blue (`#3b82f6`) e Green (`#10b981`)
- Estilo: High-Bandwidth Minimalism (Linear, Vercel)

**SEO**:
- Title: "Xase — The Evidence Layer for AI Agents"
- Description: "Turn automated decisions into immutable legal records..."
- Keywords: ai compliance, audit trail, cryptographic proof, eu ai act

---

#### 2. **`/backup` - CRM WhatsApp com IA**

**Objetivo**: Demonstrar solução completa de atendimento multicanal.

**Estrutura**:
- **Hero**: "Complete CRM for WhatsApp with AI and Multiple Channels"
- **Features Grid**: 4 cards principais (Channels, Management, Automation, Analytics)
- **Additional Features**: 6 cards (Labels, Protocols, Bulk, Groups, Scheduling, Notifications)
- **AI Integration**: Grid de 8 plataformas (GPT, Gemini, Claude, Grok, Deepseek, Ollama, Qwen, LM Studio)
- **Analytics Dashboard**: Gráficos interativos (Recharts) com KPIs
- **CTA Section**: "Schedule Demo" com ChatWidget
- **Footer**: Links de navegação

**Design**:
- Background: `#0A0A0A` (preto profundo)
- Accent: Purple gradient (`#7B61FF` → `#C0C0C0`)
- Font: Inter
- Estilo: Dark mode premium com glassmorphism

**Componentes Interativos**:
- ChatWidget (flutuante)
- Gráficos animados (Recharts)
- Scroll parallax effects

---

#### 3. **`/inside-sales` e `/white` - Funis de Conversão**

**Objetivo**: Capturar leads qualificados através de formulário multi-step.

**Fluxo (10 steps)**:
1. Intro: "Agende sua demonstração gratuita"
2. Nome
3. Email
4. WhatsApp
5. Instagram
6. Área de atuação (Comércio, Serviços, Indústria, Outra)
7. Número de funcionários (Somente eu, 1-10, 10-50, Mais de 50)
8. Faturamento mensal (0-30k, 30-100k, 100k-1M, +1M)
9. Usa tecnologia? (Sim, Ainda não)
10. Confirmação + envio para `/api/leads`

**Diferenças**:
- **`/inside-sales`**: Dark theme (`#0A0A0A`), purple accent (`#7B61FF`)
- **`/white`**: Light theme (`#f4f8f9`), blue accent (`#5989ff`)

**Features**:
- Validação em tempo real
- Auto-avanço em selects
- Progress indicator (dots)
- Animações Framer Motion
- Error handling

---

#### 4. **`/vamos` - Guia de Recrutamento com IA**

**Objetivo**: Lead magnet para captura de emails (tema: RH + IA).

**Estrutura**:
- Hero minimalista: "Guia Definitivo: Contrate os Melhores Talentos usando IA"
- Form: Email + WhatsApp
- CTA: "RECEBER GUIA DE RECRUTAMENTO COM IA"
- Confirmação: "Seu guia foi enviado"
- Social proof: "+500 empresas, 97% satisfação"

**Design**:
- Background: Black (`#000000`)
- Font: Montserrat (extralight)
- Grid pattern sutil
- Estilo: Apple-like minimalism

**SEO**:
- JSON-LD structured data (Article schema)
- Keywords: recrutamento com IA, RH, talentos

---

#### 5. **`/seo` - AI Search Analytics**

**Objetivo**: Landing para ferramenta de SEO com IA.

**Estrutura**:
- Hero: "AI search analytics for modern teams"
- Logos: Trusted by companies (mock)
- Features split: Keyword Intelligence, Content Planning, Team Workflow, Site Health
- Social proof: Testimonials
- Scatter demo: "Opportunity map"
- FAQ: 4 perguntas comuns
- Footer: Links de navegação

**Design**:
- Background: `#16181b`
- Font: Lora (serif elegante)
- Accent: Emerald (`#10b981`)
- Estilo: Product-led growth (PLG)

---

## 🧩 Componentes

### **ChatWidget** (`src/components/ChatWidget.tsx`)

Widget de chat flutuante para captura de leads através de conversação.

**Props**:
```typescript
interface ChatWidgetProps {
  showChat?: boolean;
  onClose?: () => void;
}
```

**Fluxo de Conversação**:
1. "What's your name?"
2. "What's your WhatsApp number?"
3. "What's your email address?"
4. "What's your business segment?" (6 opções)
5. "What's your monthly budget?" (4 opções)
6. "How would you like to proceed?" (Contact via WhatsApp / End conversation)

**Features**:
- Mensagens persistidas em `ChatMessage` (via `/api/messages`)
- Lead criado após step 5 (via `/api/leads`)
- Redirecionamento para WhatsApp (número: `11976638147`)
- Auto-scroll para última mensagem
- Animações Framer Motion

**Design**:
- Background: `#0A0A0A`
- Accent: Purple (`#7B61FF`)
- Posição: Fixed bottom-right
- Responsivo (max-width: 96 / max-height: 80vh)

---

### **ChatMessage** (`src/components/ChatMessage.tsx`)

Componente de mensagem individual dentro do ChatWidget.

**Props**:
```typescript
interface ChatMessageProps {
  message: string;
  isUser: boolean;
}
```

**Estilo**:
- User: Purple background (`#7B61FF`), alinhado à direita
- Bot: Gray background (`#e5e7eb`), alinhado à esquerda
- Animação: Fade-in + slide-up

---

### **Modal** (`src/components/Modal.tsx`)

Modal genérico reutilizável.

**Props**:
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
```

**Features**:
- Backdrop blur (`bg-black/80 backdrop-blur-sm`)
- Close button (X icon)
- Click outside to close
- Scroll interno (max-height: 90vh)

**Design**:
- Background: `#fafafa`
- Border radius: `rounded-lg`
- Shadow: `shadow-xl`

---

## 🔌 APIs e Serviços

### **POST `/api/leads`** (`src/app/api/leads/route.ts`)

Cria um novo lead no banco de dados.

**Runtime**: Edge

**Request Body**:
```typescript
{
  name: string;
  whatsapp: string;
  email: string;
  segment: string;
  budget: string;
}
```

**Validação**:
- Todos os campos são obrigatórios
- Retorna `400` se algum campo estiver faltando

**Response**:
```typescript
// Success (200)
{
  id: string;
  name: string;
  whatsapp: string;
  email: string;
  segment: string;
  budget: string;
  createdAt: string;
  updatedAt: string;
}

// Error (400/500)
{
  error: string;
}
```

**Uso**:
- Formulários de inside-sales, white
- ChatWidget (após step 5)

---

### **POST `/api/messages`** (`src/app/api/messages/route.ts`)

Salva uma mensagem do chat.

**Runtime**: Edge

**Request Body**:
```typescript
{
  leadId: string;
  text: string;
  isUser: boolean;
}
```

**Response**:
```typescript
// Success (200)
{
  id: string;
  leadId: string;
  text: string;
  isUser: boolean;
  createdAt: string;
}

// Error (500)
{
  error: string;
}
```

**Uso**:
- ChatWidget (cada mensagem enviada/recebida)

---

### **leadService** (`src/services/leadService.ts`)

Serviço client-side para interação com APIs.

**Funções**:

```typescript
// Criar lead
async function createLead(data: LeadData): Promise<Lead>

// Salvar mensagem
async function saveChatMessage(
  leadId: string, 
  text: string, 
  isUser: boolean
): Promise<ChatMessage>
```

**Error Handling**:
- Loga erros no console
- Lança exceção para tratamento no componente

---

## 🔄 Fluxos de Funcionamento

### Fluxo 1: Captura de Lead via ChatWidget

```
1. Usuário clica no botão flutuante (MessageSquare icon)
   ↓
2. ChatWidget abre com primeira pergunta: "What's your name?"
   ↓
3. Usuário responde (input text ou options)
   ↓
4. Mensagem salva via saveChatMessage() [se lead já existe]
   ↓
5. Bot responde com próxima pergunta
   ↓
6. Mensagem do bot salva via saveChatMessage()
   ↓
7. Repete steps 3-6 até step 5 (budget)
   ↓
8. Após step 5: createLead() é chamado
   ↓
9. Lead criado no banco (retorna leadId)
   ↓
10. Step 6: "How would you like to proceed?"
    ↓
11a. "Contact via WhatsApp" → Abre WhatsApp Web
11b. "End conversation" → Fecha widget
```

---

### Fluxo 2: Captura de Lead via Inside Sales

```
1. Usuário acessa /inside-sales ou /white
   ↓
2. Step 0: Intro → Clica "Agendar agora"
   ↓
3. Steps 1-4: Inputs de texto (nome, email, whatsapp, instagram)
   ↓
4. Steps 5-8: Selects (área, funcionários, faturamento, tecnologia)
   ↓
5. Cada select auto-avança para próximo step (300ms delay)
   ↓
6. Step 8: Botão "Enviar Dados" → submitFormData()
   ↓
7. POST /api/leads com todos os dados
   ↓
8. Se sucesso: Step 9 (confirmação)
   ↓
9. Se erro: Exibe mensagem + botão "Tentar novamente"
```

---

### Fluxo 3: Renderização de Página (SSG)

```
1. Build time: next build
   ↓
2. Next.js gera HTML estático para todas as rotas
   ↓
3. Prisma Client é gerado (prisma generate)
   ↓
4. Deploy para Vercel
   ↓
5. Usuário acessa página
   ↓
6. Vercel serve HTML estático (CDN)
   ↓
7. Hydration no client (React)
   ↓
8. Componentes interativos ficam ativos
```

---

## ⚙️ Configurações

### **Environment Variables** (`.env`)

```bash
DATABASE_URL="postgres://zpro:password@dpbdp1.easypanel.host:2123/zpro?sslmode=disable"
```

**Nota**: Credenciais devem ser rotacionadas em produção.

---

### **Next.js Config** (`next.config.ts`)

```typescript
const nextConfig: NextConfig = {
  /* config options here */
};
```

**Atualmente vazio** - Configurações padrão do Next.js 15.

---

### **Tailwind Config** (`tailwind.config.ts`)

```typescript
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

### **TypeScript Config** (`tsconfig.json`)

**Highlights**:
- Target: ES2017
- Strict mode: Enabled
- Path alias: `@/*` → `./src/*`
- JSX: `react-jsx` (React 19)

---

### **Vercel Config** (`vercel.json`)

```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

---

### **Prisma Config** (`prisma/schema.prisma`)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

---

## 🚀 Deploy e Infraestrutura

### Plataforma de Deploy

**Vercel** (configurado via `vercel.json`)

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Domínio**: Configurar em Vercel Dashboard

---

### Pipeline de Deploy

```
1. git push origin main
   ↓
2. Vercel detecta push (webhook)
   ↓
3. npm install (instala dependências)
   ↓
4. prisma generate (gera Prisma Client)
   ↓
5. next build (gera páginas estáticas + APIs)
   ↓
6. Deploy para CDN global
   ↓
7. URL de produção atualizada
```

---

### Banco de Dados

**PostgreSQL** hospedado em **Easypanel** (dpbdp1.easypanel.host).

**Migrations**:
```bash
# Criar migration
npx prisma migrate dev --name nome_da_migration

# Aplicar em produção
npx prisma migrate deploy
```

**Acesso ao DB**:
```bash
# Prisma Studio (GUI)
npx prisma studio
```

---

### Monitoramento

**Atualmente não configurado**. Recomendações:

- **Vercel Analytics**: Métricas de performance
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **Posthog**: Product analytics

---

## 🗺️ Roadmap e Próximos Passos

### Curto Prazo (1-2 semanas)

- [ ] **Atualizar Next.js** para versão sem vulnerabilidade (CVE-2025-66478)
- [ ] **Implementar validação de email** corporativo (bloquear @gmail, @hotmail)
- [ ] **Criar página de "API Docs"** (fake it 'til you make it)
- [ ] **Adicionar Google Analytics** e Facebook Pixel
- [ ] **Configurar Typeform/Tally** para waitlist qualificada
- [ ] **Criar OG images** customizadas para cada landing page

### Médio Prazo (1 mês)

- [ ] **Implementar autenticação** (NextAuth.js ou Clerk)
- [ ] **Dashboard de admin** para visualizar leads
- [ ] **Integração com CRM** (HubSpot, Pipedrive)
- [ ] **Email automation** (Resend, SendGrid)
- [ ] **A/B testing** de headlines e CTAs
- [ ] **Implementar rate limiting** nas APIs

### Longo Prazo (3 meses)

- [ ] **Desenvolver MVP do produto** (Evidence Layer)
- [ ] **Criar documentação técnica real** (API Docs)
- [ ] **Implementar billing** (Stripe)
- [ ] **Multi-tenancy** (organizações + usuários)
- [ ] **Compliance real** (SOC2, GDPR)
- [ ] **Internacionalização** (i18n: PT/EN)

---

## 📊 Métricas Atuais

### Build Stats (última build)

```
Route (app)                              Size     First Load JS
┌ ○ /                                    4.64 kB         110 kB
├ ○ /_not-found                          986 B           107 kB
├ ƒ /api/leads                           140 B           106 kB
├ ƒ /api/messages                        140 B           106 kB
├ ○ /backup                              108 kB          250 kB
├ ○ /inside-sales                        4.87 kB         147 kB
├ ○ /seo                                 278 B           106 kB
├ ○ /sitemap.xml                         0 B                0 B
├ ○ /vamos                               2.14 kB         108 kB
└ ○ /white                               4.88 kB         147 kB
```

**Observações**:
- `/backup` é a página mais pesada (250 kB) devido aos gráficos Recharts
- Páginas principais estão otimizadas (~110 kB)
- APIs são edge functions (140 B)

---

## 🔐 Segurança

### Vulnerabilidades Conhecidas

⚠️ **Next.js 15.1.0** tem vulnerabilidade (CVE-2025-66478)
- **Ação**: Atualizar para `next@latest` imediatamente

### Boas Práticas Implementadas

✅ Edge Runtime para APIs (baixa latência)  
✅ Prisma ORM (previne SQL injection)  
✅ TypeScript (type safety)  
✅ CORS implícito (Next.js)

### Melhorias Necessárias

- [ ] Rate limiting (evitar spam de leads)
- [ ] CSRF tokens em formulários
- [ ] Sanitização de inputs
- [ ] Rotação de credenciais do banco
- [ ] HTTPS obrigatório (Vercel já fornece)
- [ ] Environment variables em Vercel (não commitar `.env`)

---

## 📝 Notas Finais

### Decisões de Design

1. **High-Bandwidth Minimalism**: Escolhido para atrair investidores (YC/a16z aesthetic)
2. **Multiple Landing Pages**: Estratégia de teste A/B de propostas de valor
3. **Edge Runtime**: Prioriza latência baixa para conversão
4. **PostgreSQL Remote**: Facilita desenvolvimento local sem Docker

### Débitos Técnicos

- **Falta de testes** (unit, integration, e2e)
- **Sem CI/CD** configurado (apenas deploy manual)
- **Hardcoded strings** (deveria usar i18n)
- **Sem error boundaries** (React)
- **Logs não estruturados** (console.log)

### Contatos Importantes

- **WhatsApp de vendas**: `11976638147`
- **Domínio**: `xase.com` (configurar DNS)
- **Repositório**: `github.com/tonipcv/xase-lp`

---

**Última atualização**: 15/12/2025  
**Mantido por**: Albert Alves  
**Versão do documento**: 1.0.0
