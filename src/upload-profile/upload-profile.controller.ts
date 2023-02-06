import { Controller } from '@nestjs/common';
import { UploadProfileService } from './upload-profile.service';
import { UploadedFiles } from '@nestjs/common';
import { Get, Param, Post, Res, Put, Body } from '@nestjs/common/decorators';
import { UseInterceptors } from '@nestjs/common/decorators/core/use-interceptors.decorator';
import { FilesInterceptor } from '@nestjs/platform-express/multer';
import { join } from 'path';
import { Observable, of } from 'rxjs';
import { multerOptions } from './config';
import { UserDto } from 'src/user/UserDto';
@Controller('upload-profile')
export class UploadProfileController {
  constructor(private readonly uploadProfileService: UploadProfileService) { }



  @Post()
  @UseInterceptors(FilesInterceptor('fileAvatar', null, multerOptions))
  async uploadFile(@UploadedFiles() file) {
    console.log(file)

  }

  @Put(':id')
  async updateName(@Param('id') id, @Body() data: UserDto) {
    const numberValue = parseFloat(id);
    return this.uploadProfileService.update(numberValue, data);
  }


  @Get('/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'uploadsAvatar/' + imagename)))
  }

}
