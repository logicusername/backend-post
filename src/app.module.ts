import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasespruebacionModule } from './basespruebacion/basespruebacion.module';

@Module({
  imports: [BasespruebacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
