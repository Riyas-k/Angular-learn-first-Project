import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyFirstService {
  messages: Array<any> = [];
  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'Riyaz',
      email: 'a@gmail.com',
      message: 'Hello',
    });
    this.insert({
      name: 'ays',
      email: 'r@gmail.com',
      message: 'World',
    });
    this.insert({
      name: 'newone',
      email: 'g@gmail.com',
      message: 'Guyz',
    });
  }

  insert(message: { name: string; email: string; message: string }): void {
    this.messages.push(message);
  }
  getAllMessages(): any {
    return this.messages;
  }
  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
