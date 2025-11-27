### Pipeline build front via VM e CloudPanel

- Criar site no CloudPanel proxy reservo para porta localhost:3000
- Permissão ao usuario criado com sudo:  sudo usermod -aG sudo nome_user
- Clonar repositorio: git clone https://github.com/lab-dev-core/gerenciamento-organizacional-frontend.git
- Entra na pasta do diretorio criado: npm install
- em seguida:  npm run build
- em seguida:  npm run start

## rodar processo em background 
npm install -g pm2
pm2 start npm --name "meuapp" -- start
