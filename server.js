import express from "express";  // Importa o módulo Express para criar um servidor web
import routes from "./src/routes/postsRoutes.js";

const app = express(); // Cria uma instância do aplicativo Express
routes(app)

app.listen(3000, () => {           // Inicia o servidor e escuta por conexões na porta 3000
    console.log("Servidor escutando...");      // Mensagem de log indicando que o servidor está ouvindo
});
