import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private serviceRoute: string = 'product/';

  // constructor(private httpClient: HttpClient) { }

  // get() {
  //   return this.httpClient.get(`${environment.apiKey + this.serviceRoute}`);
  // }

  // post(product: Product) {
  //   return this.httpClient.post(`${environment.apiKey + this.serviceRoute}`, product);
  // }

  // put(product: Product) {
  //   return this.httpClient.post(`${environment.apiKey + this.serviceRoute + product.codigo}`, product);
  // }

  // delete(product: Product) {
  //   return this.httpClient.delete(`${environment.apiKey + this.serviceRoute + product.codigo}`);
  // }

  private localStorageKey = "cesta.products";
  public productList: Product[];

  constructor() {
    this.get();
  }

  public get(): Product[] {
    const data = localStorage.getItem(this.localStorageKey);

    if (!data) {
      this.productList = [];
    } else {
      this.productList = JSON.parse(data);
    }

    return this.productList;
  }

  public set(products: Product[]) {
    this.productList = products;

    localStorage.setItem(this.localStorageKey, JSON.stringify(this.productList));
  }

  public add(item: Product) {
    let products = this.get();

    products.push(item);

    this.set(products);
  }

  public update(item: Product) {
    let products = this.get();

    if (this.isInProducts(item)) {
      const index = products.findIndex(t => t.codigo == item.codigo);

      products[index] = item;
    }

    this.set(products);
  }

  public remove(item: Product) {
    let products = this.get();

    const index = products.indexOf(item);

    products.splice(index, 1);

    this.set(products);
  }

  public isInProducts(item: Product) {
    let products = this.get();

    return products.find(t => t.codigo == item.codigo) != null;
  }

  public clear() {
    localStorage.removeItem(this.localStorageKey);
    this.productList = [];
  }
}
