
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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


    async removerFoto(id) {

        try {
            const imagem = await this.prisma.imagens.delete({
                where: {
                    id,
                },
            });

            if (!imagem) {
                throw new HttpException('Imagem não encontrada', HttpStatus.NOT_FOUND);
            }

            return { status: 'Imagem deletada com sucesso!' };
        } catch (error) {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
