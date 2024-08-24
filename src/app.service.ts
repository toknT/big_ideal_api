import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { IdealDto } from './ideal.dto';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  async getIdeals(md5: string, color: string, crime: number): Promise<IdealDto[]> {
    const cacheKey = md5;
    let value: IdealDto[] | null = await this.cacheManager.get(cacheKey);
    if (value != null) {
      value = value.filter((element) => element.color != color);
    } else {
      value = [];
    }
    color = (color as string).trim();
    if (color != '') {
      value.push({ color: color, crime: Math.trunc(crime) });
      if (value.length > 71) {
        value = value.slice(-71);//max 71 colors
      }
      await this.cacheManager.set(cacheKey, value, 21000101);
    }
    return value.slice(-17);
  }
}
