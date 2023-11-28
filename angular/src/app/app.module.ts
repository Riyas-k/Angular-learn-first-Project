import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { MyFirstService } from './services/my-first.service';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [AppComponent, MyFirstComponentComponent, MessageDetailsComponent, MenuComponent, AboutComponent, ProductComponent, NewProductComponent, ProductDetailsComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpClientModule],
  providers: [MyFirstService,HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
