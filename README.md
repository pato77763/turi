# 🌊 AMA TUR MACEIÓ

Este é o site moderno e de alto padrão da **AMA TUR MACEIÓ**, especializado em turismo receptivo, transfer aeroporto e roteiros personalizados em Alagoas. Desenvolvido com **React 18**, **Motion** para animações fluidas, e estilizado de forma premium com **Tailwind CSS**.

O projeto já está 100% configurado para **compilação de produção automatizada** e hospedagem no **Vercel** ou **GitHub Pages**.

---

## 🛠️ Como rodar o projeto localmente

Se deseja testar o site em seu computador local, siga os passos abaixo:

1. **Instalar Dependências**:
   ```bash
   npm install
   ```

2. **Iniciar Servidor de Desenvolvimento**:
   ```bash
   npm run dev
   ```
   *O site estará disponível no endereço `http://localhost:3000` ou `http://localhost:5173` dependendo da porta livre.*

3. **Gerar Versão de Produção (Build)**:
   ```bash
   npm run build
   ```

---

## 🚀 Como Hospedar no Vercel Gratuitamente

Siga este guia simples para colocar o seu site online no Vercel integrado ao seu GitHub:

### Passo 1: Enviar seu código para o GitHub

1. Crie um repositório vazio no seu [GitHub](https://github.com).
2. Na pasta do seu projeto local, abra o terminal e execute os seguintes comandos:
   ```bash
   # Inicializar git (se ainda não tiver)
   git init

   # Adicionar todos os arquivos
   git add .

   # Criar o primeiro commit
   git commit -m "feat: site da AMA TUR pronto para produção"

   # Criar a branch principal
   git branch -M main

   # Conectar ao seu repositório no GitHub (substitua pelo seu link do repositório)
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

   # Enviar o código
   git push -u origin main
   ```

### Passo 2: Importar o projeto no Vercel

1. Acesse o painel da [Vercel](https://vercel.com) e faça login com a sua conta do GitHub.
2. Clique no botão **"Add New..."** e selecione **"Project"**.
3. Selecione o repositório que você acabou de criar no GitHub e clique em **"Import"**.
4. O Vercel **detectará automaticamente** que o projeto utiliza **Vite**.
5. As configurações padrão já estão corretas:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build` (ou `vite build`)
   - **Output Directory**: `dist`
6. Clique no botão **"Deploy"**.

**Pronto!** Em menos de 1 minuto, seu site estará online com um link público seguro (HTTPS). Qualquer alteração que você enviar para o GitHub (`git push`) gerará uma nova versão online no Vercel de forma 100% automática.

---

## 📂 Estrutura de Arquivos Importantes

- `src/App.tsx`: Contém todo o fluxo de navegação, roteiros de passeios, área de transfers, feedbacks e links dinâmicos para o WhatsApp.
- `src/assets/images/`: Pasta contendo todas as imagens enviadas e geradas, incluindo a nova imagem do card de Atrativos Turísticos (`regenerated_image_1781294147849.jpg`).
- `vercel.json`: Arquivo de configuração específico do Vercel para garantir que rotas e navegações SPA carreguem sem erro 404 durante recarregamentos de página.
git add .
git commit -m "fix: organiza estrutura de pastas e coloca main.tsx em src"
git push -u origin main --force
