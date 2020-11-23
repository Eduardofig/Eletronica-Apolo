# Trabalho-Web-React
Frontend do e-commerce de produtos eletrônicos para a disciplina Introducao ao Desenvolvimento Web.
Feito em na linguagem typescript com o framework 'React'

# Url:
https://sharp-brattain-6e88d8.netlify.app
# Membros do grupo

Daniel Carvalho Dantas 10685702

Eduardo Figueiredo Freire Andrade 11232820

Leonardo dos Santos Marcondes 10748476

Yann Amado Nunes Costa 10746943

# Iniciando o repositório
São necessários os comandos:

### `git clone`
Clona os arquivos para o repositório desejado em seu computador.
`git clone https://github.com/Eduardofig/Trabalho-Web-React.git`

### `npm install`
Entrando no diretório trabalho e aplicando esse comando, são instaladas as dependências do projeto.
Esse comando só funciona no diretório onde está o arquivo package.json.

### `npm start`
Inicia o projeto em seu navegador na home page. É importante ressaltar que tanto o npm install quanto o npm start devem ser feitos no diretório trabalho.

# Loja
A partir da estrutura do React, vários componentes foram criados e, dessa forma, várias páginas.

Quando inicializado o projeto com `npm start` o cliente se depara com a página principal. A partir dela ele pode apertar comprar e
ir para a página de produto (feita de forma genérica com um produto). Além disso ele pode acessar as página de missão e de contato
para conseguir saber mais informações da loja. Na barra de navegação, também é possível acessar as páginas de login/cadastro e do carrinho.

Quando o usuário decide comprar um produto (na página de produto) ele vai para o carrinho e, em seguida, ele passa pelas páginas de pagamento e endereço
para poder efetuar a sua compra.

Outra funcionalidade possível é o acesso à pagina de incluir produtos, possível apenas para usuários com permissão de administrador.

A fim de tornar a página acessível, foram utilizadas tags img em vez de alguns ícones do package `react-icons`, pois não admite o identificador alt. Além disso,
a identidade visual simples, a paleta de cores contrastante e o grande tamanho das letras favorecem a visualização da página sem grandes problemas.
