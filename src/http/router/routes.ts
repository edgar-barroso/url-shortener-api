import { FastifyInstance } from "fastify";
import { createShortenedUrlController } from "../controllers/createShortenedUrlController";
import { GetUrlController } from "../controllers/getUrlController";

export async function urlRoutes(app:FastifyInstance){
    app.post("/url", createShortenedUrlController);
    app.get("/:id", GetUrlController);

}