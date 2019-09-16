import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { FormState } from 'src/app/enums/form-state.enum';
import { ProductService } from 'src/app/services/product.service';
import { Result } from 'src/app/models/result.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  public form: FormGroup;
  public formState: FormState;
  public categories: Category[];

  @Input("product")
  set setCustomer(product: Product) {
    if (!product)
      return;

    this.form.patchValue(product);
  }

  constructor(private fb: FormBuilder, private productService: ProductService, private categoryService: CategoryService) {
    this.form = this.fb.group({
      codigo: ['', [Validators.required, Validators.maxLength(6)]],
      titulo: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      quantidade: ['', [Validators.required]],
      categoria: [0, [Validators.required]],
    });
  }

  ngOnInit() {
    this.categoryService.get().subscribe(
      (data) => {
        this.categories = data;
      }
    );
  }

  get f() {
    return this.form.controls;
  }

  create() {
    if (this.form.valid) {
      this.productService.add(this.form.getRawValue());
      this.novo();
    }
  }

  update() {
    if (this.form.valid) {
      this.productService.update(this.form.getRawValue());
      this.novo();
    }
  }

  delete() {
    if (this.form.valid) {
      this.productService.remove(this.form.getRawValue());
      this.novo();
    }
  }

  novo() {
    this.form.reset();
    this.form.get('categoria').patchValue(0);
  }
}
