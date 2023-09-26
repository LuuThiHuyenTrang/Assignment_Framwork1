import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe({
      next: (data: any) => {
        console.log(data);
        this.products = data.datas.docs;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  currentProduct!: IProduct;
  searchText: string = '';
  // xoasp(id: string | number) {
  //   const confirm = window.confirm('Are you sure!');
  //   if (confirm) this.products = this.products.filter((item) => item.id != id);
  // }

  // editProduct(product: IProduct) {
  //   console.log(product);
  //   this.currentProduct = product;
  // }
  // onHandleRemove(id: any) {
  //   console.log(id);
  // }
}
