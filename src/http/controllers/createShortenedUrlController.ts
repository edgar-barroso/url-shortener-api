import z from "zod";
import { FastifyRequest, FastifyReply } from "fastify";
import { CreateShortenedUrl } from "@/application/usecase/CreateShortenedUrl";
import { PrismaShortenedUrlRepository } from "@/repository/PrismaShortenedUrlRepository";

export async function createShortenedUrlController(request: FastifyRequest, reply: FastifyReply) {
    const createShortenedUrlBodySchema = z.object({
        target: z.string().url(),
    });

    const { target } = createShortenedUrlBodySchema.parse(request.body);

    const createShortenedUrl = new CreateShortenedUrl(new PrismaShortenedUrlRepository())
    const {id} = await createShortenedUrl.execute({target});

    return reply.status(201).send({id});
}
