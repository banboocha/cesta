import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  public produtoSelecionado: Product;

  constructor() { }

  ngOnInit() {
  }

  produtoClicado(produto: Product) {
    this.produtoSelecionado = produto;
  }
}
