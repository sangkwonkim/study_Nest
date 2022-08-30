import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppController2 } from './app.controller2';
import { AppService } from './app.service';
import { TestFeatureModuleModule } from './test-feature-module/test-feature-module.module';

@Module({
  imports: [TestFeatureModuleModule],
  controllers: [AppController, AppController2],
  providers: [AppService],
//   이제 provider(service)를 정의하고 해당 서비스의 consumer(controller)를 확보했으니 Nest가 주입을 수행할 수 있도록 Nest에 서비스를 등록해야 함. 
// 모듈 파일(app.module.ts)을 편집하고 @Module() decorator의 providers 배열에 서비스를 추가하여 이 작업을 수행힘.
})
export class AppModule {}


// providers   : Nest injector에 의해 인스턴스화되고 적어도 이 모듈 전체에서 공유될 수 있는 providers
// controllers : 이 module에 정의된 controllers 중 인스턴스화해야 하는 controllers set
// imports	    : 이 module에 필요한 providers를 export하는 모듈을 imported하는 리스트
// exports	    : 이 module에서 제공되고 이 module을 가져오는 다른 module에서 사용 가능해야 하는 providers의 하위 집합(subset). provider 자체 또는 해당 토큰(값 제공)만 사용할 수 있음.