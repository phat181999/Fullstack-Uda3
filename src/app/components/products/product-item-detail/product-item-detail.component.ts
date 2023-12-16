import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { ProductService } from 'src/app/services/product.service';
import Product from '../../../models/product'
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoaderService,
  ) { }
  product: Product | any;
  loading: any;
  amount: number = 1;
  subscriptions: Subscription[] = [];
  productId = this.activatedRoute.snapshot.params['id'] || '';
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
    this.loadingService.setLoading(true);
    this.loading = this.loadingService.getLoading();
    this.productService.getProductList().subscribe(
      (products: Product[]) => {
        this.product = products.find((product: Product) => product.id == this.productId)
        this.loadingService.setLoading(false);
        this.loading = this.loadingService.getLoading();
      }
    )
  }
  addProductToCart(product: Product, amount: number) {
    this.productService.addProductToCart(product, amount)
    alert('Add Product to Cart , Please clicking to cart to review')
  }
}
