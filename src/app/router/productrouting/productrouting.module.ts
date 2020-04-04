import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ProductDetailComponent } from 'src/app/products/product-detail.component';
import { ProductDetailGuard } from 'src/app/products/product-detail.guard';
import { ProductListComponent } from 'src/app/products/product-list.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: 'products', component: ProductListComponent },
    { path: 'products/:id',
    canActivate: [ProductDetailGuard], 
    component: ProductDetailComponent }
  ])
  ],
  exports:[
    RouterModule
  ]
})
export class ProductroutingModule { }
