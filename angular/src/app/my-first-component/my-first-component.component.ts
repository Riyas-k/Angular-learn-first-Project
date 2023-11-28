import { Component, inject } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss'],
})
export class MyFirstComponentComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  constructor (
    private service:MyFirstService //constructor injection
    // = inject(MyFirstService) property inj
  ) {
    this.messages = this.service.getAllMessages()
    this.isSubmitted = this.messages.length > 0;
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.service.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });
    this.name = '';
    this.email = '';
    this.message = '';
    console.log(this.messages);
  }

  deleteMessage(index:number ): void{
    this.service.deleteMessage(index)
  }
}
