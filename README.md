# Shopify Manager

Um aplicativo para gerenciar lojas Shopify, incluindo produtos, pedidos, clientes e carrinhos abandonados.

## Funcionalidades

- Gerenciamento de lojas Shopify
- Sincronização de produtos, pedidos e clientes
- Recuperação de carrinhos abandonados
- Integração com WhatsApp para comunicação com clientes
- Dashboard com métricas e análises

## Tecnologias

- Next.js 14
- TypeScript
- Prisma
- PostgreSQL
- NextAuth.js
- Tailwind CSS
- Shopify API
- WhatsApp API

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/vitorbeires/shopify-manager.git
cd shopify-manager
```

2. Instale as dependências
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente
```bash
cp .env.example .env
```
Edite o arquivo `.env` com suas credenciais.

4. Execute as migrações do banco de dados
```bash
npx prisma migrate dev
```

5. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

## Estrutura do Projeto

- `/src/app` - Rotas e páginas da aplicação
- `/src/components` - Componentes reutilizáveis
- `/src/hooks` - Hooks personalizados
- `/src/lib` - Utilitários e serviços
- `/src/contexts` - Contextos React
- `/prisma` - Schema e migrações do Prisma

## Licença

MIT