# Site Cristão

Este é um projeto de site para a comunidade cristã, desenvolvido com React e TypeScript. O objetivo do site é fornecer informações, recursos e uma plataforma para interação entre os membros da comunidade.

## Estrutura do Projeto

O projeto é organizado da seguinte forma:

```
site-cristao
├── public
│   └── index.html          # Documento HTML principal
├── src
│   ├── index.tsx          # Ponto de entrada da aplicação React
│   ├── App.tsx            # Componente principal da aplicação
│   ├── pages
│   │   └── Home.tsx       # Componente da página inicial
│   ├── components          # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── CTA.tsx
│   │   ├── Testimonials.tsx
│   │   └── Footer.tsx
│   ├── styles              # Estilos CSS
│   │   ├── globals.css
│   │   └── Home.module.css
│   ├── hooks               # Hooks personalizados
│   │   └── useWindowSize.ts
│   ├── utils               # Funções utilitárias
│   │   └── index.ts
│   └── types               # Tipos e interfaces TypeScript
│       └── index.ts
├── package.json            # Configuração do npm
├── tsconfig.json           # Configuração do TypeScript
├── vite.config.ts          # Configuração do Vite
└── README.md               # Documentação do projeto
```

## Instalação

Para instalar e executar o projeto, siga os passos abaixo:

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd site-cristao
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

4. Abra o navegador e acesse `http://localhost:3000` para visualizar o site.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.