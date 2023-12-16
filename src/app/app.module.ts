import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { ProductItemDetailComponent } from './components/products/product-item-detail/product-item-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingIndicatorComponent } from './components/layout/loading-indicator/loading-indicator.component';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    LoadingIndicatorComponent,
    CartItemComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
