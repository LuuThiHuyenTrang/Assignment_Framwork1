import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { SearchBoxPipe } from './search-box.pipe';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminProductEditComponent } from './pages/admin/admin-product-edit/admin-product-edit.component';
import { AdminProductAddComponent } from './pages/admin/admin-product-add/admin-product-add.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    SearchBoxPipe,
    ProductDetailComponent,
    PageNotFoundComponent,
    AdminProductEditComponent,
    AdminProductAddComponent,
    AdminProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
