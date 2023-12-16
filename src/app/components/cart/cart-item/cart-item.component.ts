import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ItemInCart from 'src/app/models/itemsInCart';
import Product from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  constructor() { }
  @Input() productData: ItemInCart = new ItemInCart();
  @Output() amountChange = new EventEmitter();
  product: Product = new Product();
  amount: number = 0
  ngOnInit(): void {
    this.product = this.productData.product;
    this.amount = Number(this.productData.amount)
  }
  onAmountChange() {
    const emmitObject = {
      amount: this.amount,
      product: this.product
    }
    this.amountChange.emit(emmitObject)
  }
}
