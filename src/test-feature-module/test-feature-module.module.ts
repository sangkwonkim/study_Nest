import { Module } from '@nestjs/common';

@Module({})
export class TestFeatureModuleModule {}

// nest g module testFeatureModule 을 사용해서 만든 feature module

// 이렇게 만든 feature module을 appModule에서 imports해서 사용할 수 있음