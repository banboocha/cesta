import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Output() produtoClicado = new EventEmitter<Product>();

  public categorias: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.get().subscribe(
      (data) => {
        this.categorias = data;
      }
    );
  }

  selectedProduct(product: Product) {
    this.produtoClicado.emit(product);
  }

  getCategoryDescription(categoryID: number): string {
    const categoria = this.categorias.find(t => t.codigo == categoryID);

    if (categoria) {
      return categoria.descricao;
    }

    return "";
  }
}
