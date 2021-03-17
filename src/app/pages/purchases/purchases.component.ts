import { Component, OnInit } from '@angular/core';
import { PurchasesService } from 'src/app/services/purchases/purchases.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css'],
})
export class PurchasesComponent implements OnInit {
  columns = [
    { name: 'Código', selector: 'id' },
    { name: 'Produtos', selector: 'products', subselector: 'name' },
  ];
  data: Array<Object>;
  constructor(private purchasesService: PurchasesService) {
    this.data = [{}];
  }

  ngOnInit(): void {
    this.purchasesService.getPurchases().subscribe((data) => {
      // console.log('User is logged in');
      // console.log(data);
      console.log(data);
      this.data = data;
    });
  }
}
