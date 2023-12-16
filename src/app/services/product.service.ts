import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import Product from '../models/product';
import ItemsInCart from '../models/itemsInCart';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  $cartStore: BehaviorSubject<Array<ItemsInCart> | any> = new BehaviorSubject([])
  cartData = this.$cartStore.asObservable();
  constructor(
    private http: HttpClient
  ) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>('./assets/data.json')
  }
  getProductsInStore() {
    return this.$cartStore.value;
  }
  addProductToCart(product: Product, amount: number) {
    let currentProductInCart = this.$cartStore.value;
    let existedProductInCart = currentProductInCart.find((item: any) => item.product.id == product.id)
    if (existedProductInCart) {
      currentProductInCart.forEach((element: any, index: any) => {
        if (element.product.id === product.id) {
          let newAmount = Number(element.amount) + Number(amount)
          element['amount'] = newAmount
          currentProductInCart[index] = element;
        }
      });
      this.$cartStore.next(currentProductInCart)
    } else {
      const newProductInCart: ItemsInCart = {
        product: product,
        amount: amount
      }
      const updatedCartStore = [...currentProductInCart, newProductInCart]
      this.$cartStore.next(updatedCartStore)
    }
  }
  removeProductFromCart(product: Product) {
    let currentProductInCart = this.$cartStore.value;
    let updatedCartStore = currentProductInCart.filter((item: any) => item.product.id !== product.id)
    this.$cartStore.next(updatedCartStore)
  }
}
