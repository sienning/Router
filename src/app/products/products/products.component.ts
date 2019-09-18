import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product = {
    id: 12,
    title: 'TITLE PRODUCT',
    author: 'Léna ENG',
    description: 'Ce tutoriel est vraiment nul'
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoDetails(productId: any) {
    this.router.navigate(['/article/', productId]);
  }
}
