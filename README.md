# Teste Técnico Front-end BeTalent

Este é um repositório para Testes Técnicos em Front-end da Be. Ele é destinado a pessoas que participam de nossos processos seletivos. 

Se você chegou até aqui por meio de um formulário de Teste Técnico, siga em frente. Caso contrário, acompanhe a BeTalent no [Linkedin](https://www.linkedin.com/company/betalenttech), [Instagram](https://www.instagram.com/betalent.tech/), [Facebook](https://web.facebook.com/bemobile.tech) ou na nossa newsletter [BeTalent Academy]([https://t.me/be_tech_community](https://beacademy.substack.com/)). Divulgamos novos processos seletivos por lá.

## Desafio

O Teste Técnico para Front-End da BeTalent consiste em construir a visualização de uma tabela com dados que virão de uma API simulada, em json-server.

### Mockup

Este é o [projeto em Figma](https://www.figma.com/file/yw6th52zE9bubewc6ayTg5/Teste-T%C3%A9cnico-Front-End-Be.?type=design&node-id=1%3A4&mode=dev&t=vVxs9eyKybrYmq4Z-1) para você se orientar. Nele, você encontrará estilos, visualização desktop e mobile e outros padrões que deverá seguir.

### Requisitos Gerais

Deve-se utilizar React.js ou Vanilla JS (JavaScript puro) para construir o projeto.

É permitido utilizar libs externas, mas recomenda-se que seja o mínimo possível.

A visualização deve ser responsiva.

A tabela deve conter as seguintes colunas:

- imagem (thumb do/a usuário/a);
- nome;
- cargo
- data de admissão;
- telefone.

Também deve ser possível realizar pesquisa na tabela por meio de um input. O input de pesquisa deve permitir filtrar dados por cargo, nome e telefone.

Datas e telefones devem ser formatadas no front-end e não na API.

Tenha instaladas em sua máquina as ferramentas [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/) (ou outro gerenciador de pacotes de sua preferência) para poder trabalhar no projeto.

### Acesso aos dados da API simulada

Para ter acesso aos dados que alimentarão o projeto, faça o seguinte:

1. caso você não tenha, instale o pacote [json-server](https://github.com/typicode/json-server);
2. clone este repositório do GitHub em sua máquina: [https://github.com/BeMobile/desafio-front-end](https://github.com/BeMobile/desafio-front-end);
3. entre na pasta do projeto, em sua máquina, e, por meio da linha de comando, execute o comando `json-server --watch db.json`, para consumir a API simulada;
4. inicie a estrutura e o desenvolvimento do projeto.

É necessário deixar o json-server rodando no terminal para que os dados sejam visualizados no projeto.

Caso você tenha problemas com o json-server, tente rodá-lo com `npx json-server db.json` ou 
com `yarn json-server <path>/db.json`, em que `<path>` é o caminho completo até o diretório em que o arquivo db.json está localizado. Se mesmo assim não funcionar, busque ajuda na web.

### Critérios de Avaliação

Em ordem de relevância, avaliaremos:

1. lógica de programação;
2. organização (do código e dos arquivos);
3. CSS do projeto;
4. README, que deve conter, pelo menos, as seguintes informações: sobre o projeto, pré-requisitos e instruções para rodar a aplicação.

É um diferencial na avaliação o uso de TypeScript.

### Envio da Solução

O projeto deverá ser hospedado em um repositório no seu GitHub. O link do repositório deverá ser fornecido por meio do formulário de Teste Técnico encaminhado ao seu e-mail. Não serão aceitos links de projetos enviados por outros meios.

Demais instruções e regras serão instruídas nos formulários e nas comunicações do processo seletivo do qual você está participando.

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

BeTalent - Tabela de Funcionários
Este projeto foi desenvolvido como parte do desafio técnico para Front-End da BeTalent. A aplicação exibe uma lista de funcionários em formato de tabela (desktop) ou lista de cards (mobile), com funcionalidades de pesquisa e visualização responsiva.
🚀 Funcionalidades

Visualização de dados em tabela (desktop) ou cards expansíveis (mobile)
Pesquisa por nome, cargo ou telefone
Design responsivo que se adapta a diferentes tamanhos de tela
Formatação de datas e números de telefone
Tratamento de estados de carregamento e erro

🔧 Tecnologias Utilizadas

React.js
TypeScript
Vite
CSS Modules
json-server (API mock)

📋 Pré-requisitos
Para executar este projeto, você precisará ter instalado:

Node.js (versão 14.x ou superior)
Yarn (recomendado) ou npm

⚙️ Instalação e Execução

**Clone o repositório**

git clone https://github.com/SantanaYure/teste-pratico-frontend-react.git
cd teste-pratico-frontend-react

**Instale as dependências**

yarn install
# ou
npm install

**Execute o servidor de API mock**
Em um terminal, inicie o json-server para simular a API:

yarn server
# ou
npm run server

**Execute a aplicação**
Em outro terminal (mantendo o json-server em execução), inicie a aplicação:

yarn dev
# ou
npm run dev

**Acesse a aplicação**
Abra seu navegador e acesse http://localhost:5173

🔍**Estrutura do Projeto**

src/
  ├── components/        # Componentes React
  ├── hooks/             # Custom hooks
  ├── types/             # Definições de tipos
  ├── utils/             # Funções utilitárias
  ├── App.tsx            # Componente principal
  └── main.tsx           # Ponto de entrada

🐛 **Solução de Problemas**

API não disponível: Certifique-se que o json-server está rodando (yarn server)
Imagens não carregando: Verifique se a pasta public/assets contém as imagens necessárias

🧠 Autor
Desenvolvido por Yure Santana como parte do processo seletivo da BeTalent.

