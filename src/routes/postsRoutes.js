import express from "express";  // Importando a biblioteca 'express', que é usada para construir aplicações web e APIs em Node.js
import multer from "multer";     // Importando a biblioteca 'multer', que é um middleware para lidar com uploads de arquivos
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";  // Importando funções específicas do controlador de posts para lidar com as operações de listar posts, criar novos posts e fazer upload de imagens
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    OptionsSuccessStatus: 200
}

const storage = multer.diskStorage({    // Configuração do armazenamento para o multer, que define onde e como os arquivos serão armazenados
    destination: function (req, file, cb) {         // Função que define o diretório de destino para os arquivos enviados
        cb(null, 'uploads/');              
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

// Criando o middleware do multer com a configuração de armazenamento definida acima
// 'dest' ainda define um diretório alternativo (caso não seja passado o 'storage', seria usado o destino padrão)
const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    app.use(express.json());  // Habilita o middleware para analisar dados JSON enviados nas requisições
    app.use(cors(corsOptions));
    app.get("/posts", listarPosts); //rota para buscar o posts-
    app.post("/posts", postarNovoPost)  //rota para criar um novo post
    app.post("/upload", upload.single("imagem"), uploadImagem) // Chama a função controladora para processamento da imagem

    app.put("/upload/:id", atualizarNovoPost)
}

export default routes;
