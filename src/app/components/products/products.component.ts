import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product';
import { LoaderService } from 'src/app/services/loader.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: Product[] = []
  loading: any;
  constructor(
    private productService: ProductService,
    private loadingService: LoaderService
  ) { }

  ngOnInit(): void {
    this.loadingService.setLoading(true);
    this.loading = this.loadingService.getLoading();
    this.productService.getProductList().subscribe((products) => {
      this.productList = products
      this.loadingService.setLoading(false);
      this.loading = this.loadingService.getLoading()
    })
  }

}
