import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
      imports: [CacheModule.register()],
    }).compile();
    appService = app.get<AppService>(AppController);
  });

  test('plus', () => {
    expect(2).toBe(2);
  })
});
