Iteris - desafio de cartas
descrição - Projeto para o desafio Somoos, com foco no back-end, aqui fiz uma simulação de cartas, onde acontece batalhas entre duas cartas por rodada

🚀 Começando
Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte Implantação para saber como implantar o projeto.

📋 Pré-requisitos
De que coisas você precisa para instalar o software e como instalá-lo?

Dar exemplos
🔧 Instalação
1º passo - comando npm install no seu terminal para instalas as dependências.
2º passo - configurar o "DATABASE_USERNAME"= nome do seu banco de dados, no arquivo ".ENV".
3º passo - executar o comando npm run dev, aparecerá o seguuinte no termeinal
ex: `Server is runner on port:

4º passo - testar em um simulador de view ex: postman.
5º passo - cnfigurar no simulador de view as rotas que quer, as rotas ficam na pasta SRC/ROUTES/CARTAS.JS.
6º passo - a primeira rota será a "/cartas", sendo essa a de criar as cartas.
7º passo - o cadastro precisa de informações iguais ou semelhantes aos valores das colunas de baixo(opcional).

ex:

{
        "nome": STRING,
        "type": STRING,
        "hp": INTEGER,
        "attack": INTEGER,
        "defense": INTEGER,
        "special_attack": INTEGER,
        "special_defense": INTEGER,
        "speed": INTEGER 
       }

8º passo - requerir essa API REST e o retorno será assim:
ex:(continuação do 7º passo)
{
    "carta": {
        "id": 7,
        "nome": "charmander",
        "type": "fire",
        "hp": 70,
        "attack": 12,
        "defense": 15,
        "special_attack": 20,
        "special_defense": 18,
        "speed": 11,
        "updatedAt": "2022-08-15T14:22:12.008Z",
        "createdAt": "2022-08-15T14:22:12.008Z"
    }
}
Por fim já temos nossa primeira carta no banco de dados!

9º passo - Para requerir uma carta por id siga abaixo:
10º passo - na rota: http://localhost:8082/cartas/1(id) , assim, pegando por id

11º passo - Para requerir e te rum torno de todos os registros de cartas do seu banco siga abaixo:
12º passo - na rota: http://localhost:8082/listar , assim, pegando todos os registros feitos


🛠️ Construído com cors, dotenv, express, init, mysql2, nodemon e pincipalmente sequelize    



Dropwizard - Sequelize

✒️ Autores
Walmir de Aguiar Monteiro

Um desenvolvedor - Trabalho Inicial - umdesenvolvedor
Walmir de Aguiar Monteiro 

📄 Licença
Este projeto está sob a licença de Walmir de Aguiar Monteiro - veja o arquivo LICENSE.md para detalhes.

🎁 Expressões de gratidão
obrigados Iteris por me proporcionar esse desafio