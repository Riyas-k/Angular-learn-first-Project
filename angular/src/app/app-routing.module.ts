import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  {
    path: 'home',
    component: MyFirstComponentComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'about/:username',
    component: AboutComponent,
  },
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'new-product',
    component: NewProductComponent,
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
