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
  isSubmitted:boolean = false;

  onSubmit ():void{
    this.isSubmitted = true
    console.log(this.email,this.message,this.name);
  }
}
