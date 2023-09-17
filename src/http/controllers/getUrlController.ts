import z from "zod";
import { FastifyRequest, FastifyReply } from "fastify";
import { PrismaShortenedUrlRepository } from "@/repository/PrismaShortenedUrlRepository";
import { GetUrl } from "@/application/usecase/GetUrl";

export async function GetUrlController(request: FastifyRequest, reply: FastifyReply) {
    const getUrlParamschema = z.object({
        id: z.string(),
    });

    const { id } = getUrlParamschema.parse(request.params);
    console.log(id)
    const getUrl = new GetUrl(new PrismaShortenedUrlRepository())
    const {target} = await getUrl.execute({id});
    return reply.redirect(target)
}
