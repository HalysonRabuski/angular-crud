import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  columns = [
    { name: 'Nome', selector: 'name' },
    { name: 'Descrição', selector: 'description' },
    { name: 'Ação', action: true },
  ];
  data: Array<Object>;

  constructor(private productService: ProductsService) {
    this.data = [{}];
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      // console.log('User is logged in');
      // console.log(data);
      this.data = data;
    });
  }
}
