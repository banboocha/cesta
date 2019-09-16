import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private serviceRoute: string = 'categories/';

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Category[]> {
    return <any>this.httpClient.get(`${environment.apiKey + this.serviceRoute}`);
  }

  // post(product: Category) {
  //   return this.httpClient.post(`${environment.apiKey + this.serviceRoute}`, product);
  // }

  // put(product: Category) {
  //   return this.httpClient.post(`${environment.apiKey + this.serviceRoute + product.codigo}`, product);
  // }

  // delete(product: Category) {
  //   return this.httpClient.delete(`${environment.apiKey + this.serviceRoute + product.codigo}`);
  // }
}
