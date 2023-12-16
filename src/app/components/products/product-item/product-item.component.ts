import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Product from 'src/app/models/product';
import { Input } from '@angular/core'
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() addedToCart = new EventEmitter()
  constructor(private router: Router, private productService: ProductService) { }
  amount: number = 1;
  selectOptions = [
    {
      option: "Option 1",
      value: 1
    }, {
      option: "Option 2",
      value: 2
    }, {
      option: "Option 3",
      value: 3
    }, {
      option: "Option 4",
      value: 4
    }, {
      option: "Option 5",
      value: 5
    }
  ]
  ngOnInit(): void {

  }
  addToCart(product: Product, amount: number) {
    this.productService.addProductToCart(product, amount)
    alert('Add Product to Cart , Please clicking to cart to review')
  }
  navigateToProductDetail(id: number): void {
    this.router.navigateByUrl(`/product/${id}`)
  }
}
