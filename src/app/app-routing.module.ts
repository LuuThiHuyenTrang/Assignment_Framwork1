import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { AdminProductAddComponent } from './pages/admin/admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './pages/admin/admin-product-edit/admin-product-edit.component';

const routes: Routes = [
  //client
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  //admin
  { path: 'admin', component: AdminProductsComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/products/add', component: AdminProductAddComponent },
  { path: 'admin/products/:id/edit', component: AdminProductEditComponent },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
