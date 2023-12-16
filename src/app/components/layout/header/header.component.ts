import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private productService: ProductService
  ) { }
  itemsInCart: number = 0;
  subscriptions: Subscription[] = []
  ngOnInit(): void {
    this.getDataInCart();
  }
  getDataInCart() {
    const cartDataSubscription = this.productService.$cartStore.subscribe(data => {
      this.itemsInCart = data.length
    })
    this.subscriptions.push(cartDataSubscription)
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }
}
