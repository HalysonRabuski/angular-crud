import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './components/template/template.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { NewProductsComponent } from './pages/products/new-products/new-products.component';
import { PurchasesComponent } from './pages/purchases/purchases.component';
import { CartComponent } from './pages/cart/cart.component';
import { AuthGuardService } from 'src/app/services/auth/auth-guard-service';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'produtos',
        component: ProductsComponent,
      },
      // {
      //   path: 'produtos/novo',
      //   component: NewProductsComponent,
      // },
      {
        path: 'compras',
        component: PurchasesComponent,
      },
      {
        path: 'carrinho',
        component: CartComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
