import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserDto } from './UserDto';


@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async create(data: UserDto) {

        const user = await this.prisma.user.findFirst({ where: { email: data.email } })

        if (user.Admin == "1") {



            if (user) {

                throw new Error('There is already an email registered with this data!.')
            }

            const createUser = await this.prisma.user.create({
                data,
            })

            return createUser;
        } else {

            throw new Error('Você não tem permissão de acessar essa pagina')
        }

    }


    async login(data: UserDto,) {


        const user = await this.prisma.user.findFirst({ where: { email: data.email, senha: data.senha } })



        if (!user) {
            throw new Error('Account not registered in our system')

        } else {
            const retornoData = await this.prisma.user.findMany({ where: { email: data.email, senha: data.senha } })

            return retornoData;
        };

    }


    async usuario(data: UserDto,) {

        const convertValor = Number(data.id)
        console.log(convertValor)
        const user = await this.prisma.user.findUnique({ where: { id: convertValor } })

        if (user) {

            return { user }
        } else {
            throw new Error('Error user')

        }
    }


}






