import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';
import { UploadProfileModule } from './upload-profile/upload-profile.module';


@Module({
  imports: [UserModule, UploadModule, UploadProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
