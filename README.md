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

Guia de Instalação e Execução - BeTalent Frontend
Este guia fornece instruções passo a passo para executar o projeto em sua máquina local.
Pré-requisitos
Antes de começar, certifique-se de ter instalado:

Node.js (versão 14.x ou superior): Download Node.js
Git: Download Git
Yarn: Após instalar o Node.js, instale o Yarn com o comando:
Copynpm install -g yarn


Passos para Execução
1. Clone o repositório
bashCopygit clone https://github.com/SantanaYure/teste-pratico-frontend-react.git
cd teste-pratico-frontend-react
2. Instale as dependências
bashCopyyarn install
3. Execute o servidor de API mock (json-server)
Abra um novo terminal na pasta do projeto e execute:
bashCopyyarn server
Isso iniciará o json-server na porta 3000, disponibilizando a API mock em http://localhost:3000/employees.
4. Execute a aplicação React
Em outro terminal (mantendo o json-server em execução), execute:
bashCopyyarn dev
A aplicação estará disponível em http://localhost:5173 (ou outra porta, caso a 5173 esteja ocupada).
Estrutura do Projeto

/src/components: Componentes React reutilizáveis
/src/hooks: Hooks personalizados para gerenciamento de estado
/src/types: Definições de tipos TypeScript
/src/utils: Funções utilitárias como formatadores de data e telefone

Funcionalidades

Visualização de dados de funcionários em tabela (desktop) ou lista de cards (mobile)
Pesquisa por nome, cargo ou telefone
Design responsivo que se adapta a diferentes tamanhos de tela
Formatação automática de datas e números de telefone

Solução de Problemas

API não está disponível: Verifique se o json-server está em execução no terminal separado
Imagens não carregam: Verifique se a pasta public/assets contém as imagens necessárias
Erros de TypeScript: Execute yarn tsc para verificar erros de tipagem

Informações Adicionais
Este projeto foi desenvolvido com:

React 18
TypeScript
Vite
CSS Modules
json-server para API mock

Em caso de dúvidas ou problemas, entre em contato através do GitHub ou pelo e-mail de contato fornecido.
