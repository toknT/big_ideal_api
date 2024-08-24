import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IdealDto } from './ideal.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post(":md5")
  async getIdealTexts(@Param('md5') md5: string, @Body() idealDto: IdealDto): Promise<IdealDto[]> {
    return this.appService.getIdeals(md5, idealDto.color, idealDto.crime);
  }
  @Get()
  getHello() {
    return 'md5_to_find_friend_in_net';
  }
}
