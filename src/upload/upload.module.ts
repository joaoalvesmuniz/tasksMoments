import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { PrismaService } from 'src/database/PrismaService';


@Module({
  imports: [UploadModule],
  controllers: [UploadController],
  providers: [UploadService, PrismaService]
})
export class UploadModule { }
