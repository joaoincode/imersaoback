import {getTodosPosts, criarPost} from "../models/postsModels.js";
import fs from "fs";

export async function listarPosts(req, res) {   // Rota para obter todos os posts
    const posts = await getTodosPosts()  // Chama a função para obter todos os posts
    res.status(200).json(posts);    // Envia uma resposta HTTP com status 200 (sucesso) e os posts no formato JSON   
    } 

export async function postarNovoPost(req, res) {
        const novoPost = req.body;
        try {
            const postCriado = await criarPost(novoPost)
            res.status(200).json(postCriado);
        } catch(error) {
            console.error(erro.message);
            res.status(500).json({"Erro":"Falha na requisição"})
        }
    }

    export async function uploadImagem(req, res) {
        const novoPost = {
            descricao: "",
            imgUrl: "req.file.originalname",
            alt: ""
        };

        try {
            const postCriado = await criarPost(novoPost)
            const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
            fs.renameSync(req.file.path, imagemAtualizada)
            res.status(200).json(postCriado);
        } catch(error) {
            console.error(erro.message);
            res.status(500).json({"Erro":"Falha na requisição"})
        }
    }