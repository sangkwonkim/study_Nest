import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppController2 } from './app.controller2';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AppController2],
  providers: [AppService],
//   이제 provider(service)를 정의하고 해당 서비스의 consumer(controller)를 확보했으니 Nest가 주입을 수행할 수 있도록 Nest에 서비스를 등록해야 함. 
// 모듈 파일(app.module.ts)을 편집하고 @Module() decorator의 providers 배열에 서비스를 추가하여 이 작업을 수행힘.
})
export class AppModule {}
