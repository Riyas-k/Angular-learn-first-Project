import { Component } from '@angular/core';

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

  onSubmit(): void {
    this.isSubmitted = true;
    this.messages.push({
      name: this.name,
      email: this.email,
      message: this.message,
    });
    // this.name = '';
    // this.email = '';
    // this.message = '';
    console.log(this.messages);
  }

  deleteMessage(index:number ): void{
    this.messages.splice(index,1)
  }
}
