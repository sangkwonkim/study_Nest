import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // 서비스는 class constructor를 통해 컨트롤러에 주입됨. 
  // private syntax을 사용함. 
  // 이 약어를 사용하면 동일한 위치에서 즉시 service member을 선언하고 초기화할 수 있음.

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('find') 
  getHello2(@Param() params): string {
    console.log(params.id);
    return this.appService.getHello(params.id); // return `id ${params.id} hello!`
  }


  @Get(':id')
    getHello3(@Param('id') id: string): string {
    return this.appService.getHello(params.id); // return `id ${params.id} hello!`
  }

  @Get() // Redirection
  @Redirect('https://sangkwonkim@github.com', 301)

  @Get('docs') // 해당 요청에서 사용할 redirection url을 예외 사항에 맞춰서 변경할 수 있음
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Post('create') //header 접근 방법
  @Header('Cache-Control', 'none')
  create(): string {
    return this.appService.create();
  }


  @Post('create')
  @HttpCode(204) // stutus code 입력
  create(): string {
    return this.appService.create();
  }

  @Get('ab*cd') // wildCard route
  findAll() {
    return 'This route uses a wildcard';
  }
}
