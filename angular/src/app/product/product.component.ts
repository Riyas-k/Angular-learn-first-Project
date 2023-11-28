import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/Models/product-representation';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products:Array<ProductRepresentation> = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getAllProductsLimit().subscribe({
      next: (data): void => {
        this.products = data;
      },
    });
    // throw new Error('Method not implemented.');
  }
}
