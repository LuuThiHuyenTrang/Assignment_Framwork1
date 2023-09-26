import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:1001/api/products/`);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(
      `https://6110f09bc38a0900171f0ed0.mockapi.io/product`,
      product
    );
  }
}
