import { ShortenedUrlRepository } from "@/repository/ShortenedUrlRepository";


interface GetUrlInput{
    id:string
}
interface GetUrlOutput{
    target:string
}

export class GetUrl{
    constructor (readonly shortenedUrlRepository:ShortenedUrlRepository){

    }

    async execute({id}:GetUrlInput):Promise<GetUrlOutput>{
        const target = await this.shortenedUrlRepository.findById(id)
        if(!target) throw new Error("not found")
        return {target}
    }
}