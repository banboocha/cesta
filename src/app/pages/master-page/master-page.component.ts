import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Pagina {
  constructor(public nome: string, public rota: string) {
  }
}

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent implements OnInit {
  paginas: Pagina[] = [];

  constructor(
    private route: Router
  ) {
    this.paginas.push(new Pagina("Home", "home"));
    this.paginas.push(new Pagina("Produto", "product"));
    this.paginas.push(new Pagina("Reports", "reports"));
    // this.paginas.push(new Pagina("Home", "home"));
  }

  ngOnInit() {
  }

  logout() {
    // UserUtil.clear();
    this.route.navigate(['login']);
  }

  abrir(pagina: Pagina) {
    this.route.navigate([pagina.rota]);
  }
}
