import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './modules/app'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = app.get<ConfigService>('ConfigService')
  const port = config.get<number>('port')

  await app.listen(port, () => {
    console.info(`Server listening on ${port}`)
  })
}

bootstrap()
