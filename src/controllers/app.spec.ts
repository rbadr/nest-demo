import { Test, TestingModule } from '@nestjs/testing'

import { AppController } from './app'
import { AppService } from '../services/app'

describe('AppController', () => {
  let app: TestingModule
  const port = 7000
  const configServiceMockFactory = () => ({ get: jest.fn(() => port) })

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: 'ConfigService',
          useFactory: configServiceMockFactory,
        },
      ],
    }).compile()
  })

  describe('getHello', () => {
    it('should return "Hello from port"', () => {
      const appController = app.get<AppController>(AppController)
      expect(appController.getHello()).toBe(`Hello from port ${port}`)
    })
  })
})
