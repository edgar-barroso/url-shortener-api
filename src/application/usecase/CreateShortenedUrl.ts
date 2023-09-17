import { ShortenedUrlRepository } from "@/repository/ShortenedUrlRepository";


interface CreateShortenedUrlInput{
    target:string
}
interface CreateShortenedUrlOutput{
    id:string
}

export class CreateShortenedUrl{
    constructor (readonly shortenedUrlRepository:ShortenedUrlRepository){

    }

    async execute({target}:CreateShortenedUrlInput):Promise<CreateShortenedUrlOutput>{
        const id = await this.shortenedUrlRepository.create(target)
        return {id}
    }
}