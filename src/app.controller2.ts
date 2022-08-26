import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller({ host: 'admin.sangkwon.com' }) Sub-Domain Routing 특정 host에 따른 route
// export class AdminController {
//   @Get('find')
//   getHelle(): string {
//     return this.appService.getHello(); // return '안녕하세요 admin'
//   }
// }


// @Controller({ host: ':account.example.com' })
// export class AppController2 {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getInfo(@HostParam('account') account: string) {
//     return account;
//   }
// }
