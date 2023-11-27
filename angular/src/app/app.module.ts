import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from './message-details/message-details.component';

@NgModule({
  declarations: [AppComponent, MyFirstComponentComponent, MessageDetailsComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
