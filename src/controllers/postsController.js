import getTodosPosts from "../models/postsModels.js";

export async function listarPosts(req, res) {   // Rota para obter todos os posts
    const posts = await getTodosPosts()  // Chama a função para obter todos os posts
    res.status(200).json(posts);    // Envia uma resposta HTTP com status 200 (sucesso) e os posts no formato JSON   
    } 