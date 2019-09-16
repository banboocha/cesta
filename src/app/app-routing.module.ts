import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },

  {
    path: '', component: MasterPageComponent,
    canActivate: [AuthenticatedGuard],
    children: [
      { path: 'product', component: ProductPageComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'reports', component: ReportsPageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
