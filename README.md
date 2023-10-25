# Web-React Project
Frontend of the electronic products e-commerce for the Introduction to Web Development course.
Built in TypeScript with the 'React' framework.

# URL:
https://sharp-brattain-6e88d8.netlify.app

# Group Members

Daniel Carvalho Dantas 10685702

Eduardo Figueiredo Freire Andrade 11232820

Leonardo dos Santos Marcondes 10748476

Yann Amado Nunes Costa 10746943

# Initializing the Repository

# Front-end

The following commands are required:

### `git clone`
Clone the files to the desired repository on your computer.
`git clone https://github.com/Eduardofig/Trabalho-Web-React.git`

### `npm install`
Enter the 'trabalho' directory and execute this command to install project dependencies.
This command only works in the directory where the 'package.json' file is located.

### `npm start`
Starts the project in your browser on the home page. It's important to note that both 'npm install' and 'npm start' should be done in the 'trabalho' directory.

# Backend

The following commands are required:
### `npm install`
Enter the 'backend' directory and execute this command to install project dependencies.

### `npm start`
Runs the backend.

To access the MongoDB from the terminal:
"mongodb+srv://eletronica-apollo.63ug4.mongodb.net/Eletronica-Apollo" --username admin

Password:
The password was provided in the delivery PDF.

# Store
Using the React structure, various components were created, resulting in several pages.

When the project is initialized with 'npm start,' the client is presented with the main page. From there, they can click 'buy' and
go to the product page (generic product). Additionally, they can access the mission and contact pages
to get more information about the store. In the navigation bar, you can also access the login/registration and cart pages.

When the user decides to purchase a product (on the product page), they go to the cart and then proceed through the payment and address pages
to complete their purchase.

Another possible feature is access to the product inclusion page, possible only for users with administrator permission.

To make the page accessible, 'img' tags were used instead of some icons from the 'react-icons' package, as they do not support the 'alt' attribute. Additionally,
the simple visual identity, contrasting color palette, and large font size facilitate page viewing without major issues.
