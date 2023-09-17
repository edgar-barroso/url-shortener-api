export interface ShortenedUrlRepository{
    create(target:string):Promise<string>
    findByUrl(url:string):Promise<string | undefined>
    findById(id:string):Promise<string | undefined>
}