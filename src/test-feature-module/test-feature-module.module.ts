import { Module } from '@nestjs/common';

@Module({
  //  controllers: [testFeatureController],
  //  providers: [testFeatureService],
  //  exports: [testFeatureService],
  // 만약 testFeatureService가 있다고 가정한다면, 이렇게 exports 배열에 추가함으로써 해당 모듈을 import하는 다른 모듈에서
  // testFeatureService에 접근할 수 있으며, 동일한 인스턴스를 공유할 수 있음
})
export class TestFeatureModuleModule {}

// nest g module testFeatureModule 을 사용해서 만든 feature module

// 이렇게 만든 feature module을 appModule에서 imports해서 사용할 수 있음
