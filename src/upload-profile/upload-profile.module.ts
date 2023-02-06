import { Module } from '@nestjs/common';
import { UploadProfileService } from './upload-profile.service';
import { UploadProfileController } from './upload-profile.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  imports: [UploadProfileModule],
  controllers: [UploadProfileController],
  providers: [UploadProfileService, PrismaService]
})
export class UploadProfileModule { }
