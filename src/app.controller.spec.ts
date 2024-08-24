import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
      imports: [CacheModule.register()],
    }).compile();
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return hello', () => {
      expect(appController.getHello()).toBe('md5_to_find_friend_in_net');
    });
  });
});
