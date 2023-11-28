import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/Models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(
    // private activatedRoute: ActivatedRoute,
    private service: ProductService
  ) {}
  param: any;
  queryParam: any;

  ngOnInit(): void {
    // console.log(this.activatedRoute);
    // this.param = this.activatedRoute.snapshot.params['username'];
    // this.activatedRoute.queryParams.subscribe((params) => {
    //   console.log(params['course'], 'params');
    //   this.queryParam = params['course'];
    // });
    // this.service.getAllProductsLimit().subscribe({
    //   next: (data): void => {
    //         console.log(data);

    //   },
    //  error:(error:HttpErrorResponse):void =>{
    //   console.log(error);
    //  }
    // });
    const product: ProductRepresentation = {
      title: 'My product',
      description: 'hello',
      category: 'new',
      image: 'image.2pg',
      price: 200,
      // rating:{
      //   count:10,
      //   rate:4
      // }
    };
    this.service.createProduct(product).subscribe({
      next: (data): void => {
        // alert('Success');
        console.log(data);
      },
      error: (error: HttpErrorResponse): void => {
        // console.log(error);
        if (error instanceof ErrorEvent) {
          console.error('An error occurred', error);
        } else {
          console.error(
            `Server returned status code ${error.status},error message ${error.message} `
          );
        }
      },
    });
  }
}
