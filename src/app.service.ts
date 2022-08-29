import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly name: string[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  create(who: string): string {
    this.name.push(who);
    return `${who} is inseted`
  }
}
