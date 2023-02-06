import { Controller, UploadedFiles } from '@nestjs/common';
import { Body, Get, Param, Post, Put, Res } from '@nestjs/common/decorators';
import { UseInterceptors } from '@nestjs/common/decorators/core/use-interceptors.decorator';
import { FilesInterceptor } from '@nestjs/platform-express/multer';
import { join } from 'path';
import { Observable, of } from 'rxjs';
import { UserDto } from 'src/user/UserDto';
import { multerOptions } from './config';
import { ImagemDto } from './ImagemDto';
import { UploadService } from './upload.service';
@Controller('upload')
export class UploadController {

  constructor(private readonly uploadService: UploadService) { }
  @Post()
  @UseInterceptors(FilesInterceptor('file', null, multerOptions))
  async uploadFile(@UploadedFiles() file) {
    console.log(file)
    return file[0].filename
  }


  @Post('create-imagemdb')
  async create(@Body() data: ImagemDto) {
    return await this.uploadService.createImage(data)
  }


  @Post('update-image')
  @UseInterceptors(FilesInterceptor('file', null, multerOptions))
  async uploadUpdate(@UploadedFiles() file) {

    return file[0].filename
  }

  @Put(':id')
  async updateName(@Param('id') id, @Body() data: ImagemDto) {
    const numberValue = parseFloat(id);
    return this.uploadService.updateImage(numberValue, data);
  }


  @Get('all-images')
  async findImages() {

    return await this.uploadService.findImages()
  }

  @Get('/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploads/' + imagename)))
  }




}



