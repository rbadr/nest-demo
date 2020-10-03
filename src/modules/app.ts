import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from '../controllers/app'
import { AppService } from '../services/app'
import configuration from '../config/configuration'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
