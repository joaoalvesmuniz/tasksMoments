import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UploadProfileService {

    constructor(private prisma: PrismaService) { }


    async update(id, data) {




        const usuario = await this.prisma.user.findUnique({

            where: {
                id,
            },
        })


        if (!usuario) {
            throw new Error('Book does not exists!');

        }

        return await this.prisma.user.update({
            data,
            where: {
                id,
            },
        })
    }


    async findImages() {
        const imagemFind = await this.prisma.imagemAvatar.findMany()

        return imagemFind;

    }
}
