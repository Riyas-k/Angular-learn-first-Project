import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../Models/product-representation';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getAllProductsLimit(limit: number = 5): Observable<any> {
    // const productUrl : string = this.baseUrl + 'products?limit='+5;
    const productUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productUrl);
  }

  createProduct(product: ProductRepresentation): Observable<Object> {
    const productUrl: string = `${this.baseUrl}productss`;
    return this.http.post<ProductRepresentation>(productUrl, product);
  }
}
