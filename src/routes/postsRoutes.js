import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());  // Habilita o middleware para analisar dados JSON enviados nas requisições
    app.get("/posts", listarPosts);
}

export default routes;
