import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interface/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  @Input() product!: IProduct;
  // cha sang con=)))
  @Output() onRemove = new EventEmitter();
  showId(id: any) {
    this.onRemove.emit(id);
  }
}
