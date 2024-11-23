import 'dotenv/config'
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js"; // Importa a função para conectar ao banco de dados MongoDB a partir de um arquivo de configuração

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)  // Conecta ao banco de dados MongoDB usando a string de conexão fornecida no ambiente

export async function getTodosPosts() {            // Função assíncrona para obter todos os posts do banco de dados
    const db = conexao.db("imensao-instabyte");       // Obtém a conexão com o banco de dados e seleciona o banco de dados "imensao-instabyte"
    const colecao = db.collection("posts");           // Obtém a coleção "posts" do banco de dados
    return colecao.find().toArray()            // Encontra todos os documentos na coleção "posts" e retorna como um array
}

export async function criarPost(novoPost) {
    const db = conexao.db("imensao-instabyte");
    const colecao = db.collection("posts");  
    return colecao.insertOne(novoPost)
}

export async function atualizarPost(id ,novoPost) {
    const db = conexao.db("imensao-instabyte");
    const colecao = db.collection("posts");  
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set: novoPost})
}