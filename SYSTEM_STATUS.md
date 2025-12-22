# XASE – Estado atual e como funciona

## Visão geral

- **Front/Next.js**: projeto principal em `super-xase/` (Next App Router).
- **API (dev)**: servida pelo próprio Next com rotas em `src/app/api/xase/v1/*` e testada via ngrok.
- **CLI**: `xase-github-repos/xase-cli/`, aponta para `baseUrl` com prefixo `/api/xase/v1`.
- **Dashboard**: `https://app.xase.ai/xase`.

---

## Endpoints implementados no Next

- `GET /api/xase/v1/health`  → 200 "ok"
  - Arquivo: `src/app/api/xase/v1/health/route.ts`
- `GET /api/xase/v1/metrics`  → requer `X-API-Key`, retorna `{ ok, period }`
  - Arquivo: `src/app/api/xase/v1/metrics/route.ts`
- `GET /api/xase/v1/records`  → requer `X-API-Key`, retorna lista vazia
- `POST /api/xase/v1/records` → requer `X-API-Key`, ecoa payload com `id`
  - Arquivo: `src/app/api/xase/v1/records/route.ts`
- `POST /api/xase/v1/cli/auth/login` → fluxo de login do CLI por e-mail/senha (isolado do front)
  - Arquivo: `src/app/api/xase/v1/cli/auth/login/route.ts`
  - Retorna `{"apiKey":"xase_pk_dev_example"}` no stub de dev (trocar por auth real depois).

---

## CLI – comandos relevantes

- `xase auth login`
  - Fluxo padrão interativo:
    1) Pergunta e-mail (Enter pula para API key)
    2) Pergunta senha (oculta)
    3) Faz `POST /cli/auth/login`, recebe `apiKey`, valida em `/metrics` e salva
  - Alternativas:
    - `xase auth login --email <email>` → só pede senha
    - `xase auth login -k <xase_pk_...>` → login direto com API key
- `xase auth status` → mostra `API URL` e se está autenticado.
- `xase auth logout` → remove credenciais.
- `xase config list|set` → ver/definir `baseUrl`, `apiKey`, `tenant`.
- `xase metrics summary` → sumariza métricas.
- `xase records list --limit 5` → lista registros.
- `xase dashboard` → abre `https://app.xase.ai/xase`.

---

## Configuração do CLI

- Arquivo: `~/Library/Preferences/xase-nodejs/config.json` (macOS)
- Chaves suportadas: `apiKey`, `baseUrl`, `tenant`
- Exemplos:
```bash
xase config set baseUrl https://<SEU_SUBDOMINIO>.ngrok-free.app/api/xase/v1
xase config set apiKey xase_pk_********
xase config set tenant meu-tenant
xase config list
```

---

## Dev local com ngrok

1) Rodar Next:
```bash
npm run dev
```
2) Abrir túnel:
```bash
ngrok http 3000 --host-header=rewrite
# copie a URL https (minúsculas)
```
3) Apontar CLI:
```bash
xase config set baseUrl https://<NGROK>.ngrok-free.app/api/xase/v1
xase auth login
xase metrics summary
xase records list --limit 5
```
4) Testes rápidos (curl):
```bash
curl -i https://<NGROK>.ngrok-free.app/api/xase/v1/health
curl -i -H "X-API-Key: xase_pk_********" \
  "https://<NGROK>.ngrok-free.app/api/xase/v1/metrics?period=week"
```

---

## Produção (api.xase.ai)

- DNS já aponta para Vercel. Para funcionar:
  - Deploy do projeto Next com as rotas acima.
  - Validar:
```bash
curl -i https://api.xase.ai/api/xase/v1/health
```
  - CLI:
```bash
xase config set baseUrl https://api.xase.ai/api/xase/v1
xase auth login
```
- Alternativa: `vercel.json` com rewrites para backend externo (se preferir separar API do Next).

---

## Segurança e observações

- **API key no header**: `X-API-Key` (CLI envia automaticamente).
- **Login e-mail/senha**: endpoint isolado do front em `/cli/auth/login` para evitar colisão.
- **Tenant**: opcional; exibe em `xase config list` apenas se definido.
- **Dashboard**: `https://app.xase.ai/xase`.

---

## Próximos passos sugeridos

- Trocar stub do `/cli/auth/login` por validação real e emissão de `apiKey` válida.
- Publicar a API no Vercel (ou rewrites para backend dedicado) para `api.xase.ai` responder 200.
- Adicionar `GET /api/xase/v1/health` estável em prod e testes automatizados do CLI.
