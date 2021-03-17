import { Component, OnInit } from '@angular/core';
import { PurchasesService } from 'src/app/services/purchases/purchases.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  columns = [
    { name: 'Nome', selector: 'name' },
    { name: 'Descrição', selector: 'description' },
    // { name: 'Ação', action: true },
  ];
  data: Array<Object>;

  constructor(private purchasesService: PurchasesService) {
    this.data = [{}];
  }

  handleErase() {
    localStorage.removeItem('crud-products');
    this.data = [];
  }

  handlePurchase() {
    this.purchasesService.setPurchase(this.data).subscribe((data) => {
      // console.log('User is logged in');
      this.handleErase();
      alert('Compra efetuada com sucesso!');
    });
  }

  ngOnInit(): void {
    // this.productService.getProducts().subscribe((data) => {
    //   // console.log('User is logged in');
    //   // console.log(data);
    this.data = JSON.parse(localStorage.getItem('crud-products') || '{}');
    // });
  }
}
