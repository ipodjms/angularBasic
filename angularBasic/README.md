# AngularBasic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Rode `ng serve --open` no terminal na pasta da angularbasic/ e seu termina vai abrir no endereço: http://localhost:4200/

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

Obrigado por avaliar.



##<DesafioFrontend Angular />

API: RANDOM USER GENERATOR

Layout: Marvel App - Conversei com o DESIGNER e ele não tinha o arquivo aberto, somente esse navegável de interações, por isso o layout não está tão idêntico, gentileza se necessário reavaliar.

Ao efetuar a estimativa para realização, por favor avise o RH. - 4 dias foi suficiente.

Requisitos
Eu como usuário, desejo visualizar a listagem de candidatos; - OK
Eu como usuário, desejo pesquisar um determinado usuário conforme seu nome ou email; - OK **bug no email
Eu como usuário, desejo que seja apresentado a foto de um usuário qualquer no menu da Minha Conta (Buscar da API); - ** SEM LAYOUT
Eu como usuário, desejo visualizar as informações de cada candidato (Nome, email, telefone, cidade e estado); - OK
Eu como usuário, desejo enviar para a "LIXEIRA" um usuário que esteja na listagem "TODOS" ou "ATENDIDOS"; - OK
Eu como usuário, desejo enviar para a listagem "TODOS" um usuário que esteja na listagem "ATENDIDOS" ou "LIXEIRA"; - OK
Eu como usuário, desejo marcar como "ATENDIDO" um usuário que esteja na listagem "TODOS" ou "LIXEIRA"; - OK
Eu como usuário, desejo navegar nos filtros laterais conforme a interação executada; - OK
Eu como usuário, desejo que ao clicar em um item da listagem seja apresentado as informações do usuário em uma nova tela; - OK
Eu como usuário, desejo que ao visualizar a informação de um usuário seja possível voltar a tela anterior; - OK


##Especificações Técnicas

Nível Junior

Layout conforme proposto (Dê o seu máximo); - OK, ficou honeto sem ter um zeplin.
A aplicação deve se comportar como uma Single Page Application; - OK
Utilização de Rotas para navegação; - OK
Ao navegar entre as rotas, as informações devem ser mantidas e não pode haver refresh da listagem; - OK
A busca deverá ser executada na listagem atual; - OK
(Desejável/Bônus) Paginação; - OK


Nível Pleno

Todos os requisitos do nível anterior;- OK
Utilizar lazy loading na navegação das rotas;
Paginação númerada;
Armazenar todas as informações utilizando algum gerenciamento de estado.
Ao navegar nos filtros laterais, todas as informações devem já estar no estado; - OK
Ao pesquisar, deverá ser armazenado no estado todas as pesquisas realizadas na sessão atual;
Configurar tslint; - OK
Testes unitários; - Teste padrão do jasmine
(Desejável/Bônus) Microinterações na interface;

Nível Senior

Todos os requisitos dos níveis anteriores;
Paginação infinita em vez da numerada; - OK
Microinterações na interface;
Testes unitários (mínimo de 70% de coverage);
Execução dos testes unitários no build do projeto;
Utilizar ferramenta para internacionalização (criar bundle de linguagem i18n);
Utilizar alguma metodologia para CSS (BEM, SMACSS, OOCSS, ATOMIC CSS, DRY CSS);
(Desejável/Bônus) Realizar testes de snapshot; 
(Desejável/Bônus) Apresentação do coverage dos testes unitários;
(Desejável/Bônus) Separar Dumb Components;

** Desejável ***
A aplicação deve ser responsiva (mobile, tablet, desktop); - OK
Publicar o projeto em alguma plataforma (Heroku, Wedeploy, Firebase, etc), afim de ser possível visualizar através de um link; (Obs: O link deve ser utilizado o build de produção)
Especificações Gerais
Utilizar Angular; - OK
Utilizar pré-processador de CSS (Fique a vontade para usar alguma lib/framework css); - OK
ECMAScript 6; - OK
Flexbox;
Armazenar o código fonte no Github; - OK
Documentar no readme.md como executar o projeto; - OK

