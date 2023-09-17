import { prisma } from "@/lib/prisma";
import { ShortenedUrlRepository } from "./ShortenedUrlRepository";

export class PrismaShortenedUrlRepository implements ShortenedUrlRepository{
    async create(target:string):Promise<string>{
        const shortenedUrl = await prisma.shortenedUrl.create({data:{target}})
        return shortenedUrl.id
    }

    async findByUrl(url:string):Promise<string | undefined>{
        const shortenedUrl = await prisma.shortenedUrl.findUnique({where:{target:url}})
        if (!shortenedUrl) return
        return shortenedUrl.id
    }

    async findById(id:string):Promise<string | undefined>{
        const shortenedUrl = await prisma.shortenedUrl.findUnique({where:{id}})
        if (!shortenedUrl) return
        return shortenedUrl.target
    }
}