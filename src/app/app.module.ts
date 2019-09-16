import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MaskDirective } from './directives/mask.directive';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductEditComponent,
    ProductListComponent,
    MaskDirective,
    ProductPageComponent,
    LoadingComponent,
    LoginPageComponent,
    SignupPageComponent,
    HomePageComponent,
    MasterPageComponent,
    ReportsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
