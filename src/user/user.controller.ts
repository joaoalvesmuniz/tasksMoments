import { Controller, UseInterceptors } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, UploadedFile } from '@nestjs/common/decorators/http/route-params.decorator';

import { UserService } from './user.service';
import { UserDto } from './UserDto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }


  @Post('create-user')
  async create(@Body() data: UserDto) {
    return await this.userService.create(data)
  }


  @Post('login-user')
  async login(@Body() data: UserDto) {
    return await this.userService.login(data)
  }

  @Post('user-found')
  async usuario(@Body() data: UserDto) {
    return await this.userService.usuario(data)
  }



}
