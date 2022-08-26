import { Controller, Get } from '@nestjs/common';
import { CreateUserDto } from './app.dto';
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

//@Controller()
//export class AppController2 {
//  constructor(private readonly appService: AppService) {}

//  @Get() // 이처럼 async/ await으로도 처리가 가능함
//  async findAll(): Promise<any[]> {
//    return [];
//  }

//  @Get() // rxJs 사용방법
//  // Nest route handlers는 RxJS observable 스트림을 반환할 수 있어 훨씬 더 강력함
//  // 아트룸즈 프로젝트를 초기부터 개발했었던 직원 중 한 명이 이렇게 코드를 구현해서
//  // 의문을 가졌는데, 다음에 기회가 되면 RxJS의 장점에 대해서도 알아보겠음
//  findAll(): Observable<any[]> {
//    return of([]);
//  }
//}

// DTO(Data Transfer Object)는 네트워크를 통해 데이터가 전송되는 방법을 정의하는 객체임
// class는 자바스크립트의 일부임으로 컴파일에서 안전할 수 있음
// interface는 확장 중에 제거 되기 때문에 dto는 class로 만드는 것을 추천함

//@Controller('/user')
//export class AppController2 {
//  constructor(private readonly appService: AppService) {}

//  @Post()
//  async createUser(@Body() createUserDto: CreateUserDto) {
//    return blahblah;
//  }
//}
