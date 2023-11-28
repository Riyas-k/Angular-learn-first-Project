import { Component } from '@angular/core';
import { ProductRepresentation } from '../services/api/Models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent {

  constructor(private productService:ProductService,private router:Router){

  }

  product: ProductRepresentation = {};
  handleSubmit() {
   this.productService.createProduct(this.product).subscribe({
    next:(data):void =>{
      console.log(data);
      this.router.navigate(['products'])
    }
   })
  }  
}
