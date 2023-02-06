
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ImagemDto } from './ImagemDto';


@Injectable()
export class UploadService {
    constructor(private prisma: PrismaService) { }


    async createImage(data: ImagemDto) {

        const imagemCreate = await this.prisma.imagens.create({
            data,
        })

        return imagemCreate;
    }

    async updateImage(id, data) {

        return await this.prisma.imagens.update({
            data,
            where: {
                id,
            },
        })
    }



    async findImages() {
        const imagemFind = await this.prisma.imagens.findMany()

        return imagemFind;

    }

}
