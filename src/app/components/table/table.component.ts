import { Component, OnInit, Input } from '@angular/core';
import { PurchasesService } from 'src/app/services/purchases/purchases.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() columns: Array<any>;
  @Input() data: Array<any>;
  constructor(private purchasesService: PurchasesService) {
    this.columns = [];
    this.data = [];
  }
  ngOnInit(): void {}

  // handlePurchase(item: any) {
  //   this.purchasesService.setPurchase(item.id).subscribe((data) => {
  //     // console.log('User is logged in');
  //     console.log(data);
  //     alert('Produto comprado');
  //   });
  // }
  async handleCart(item: any) {
    let prdts = [];
    if (localStorage.getItem('crud-products')) {
      prdts = JSON.parse(localStorage.getItem('crud-products') || '{}');
    }

    const filter = await prdts.filter((a: any) => a.name === item.name);

    if (filter.length > 0) {
      alert('O produto já se encontra no carrinho');
    } else {
      prdts.push(item);
      localStorage.setItem('crud-products', JSON.stringify(prdts));

      alert('Produto adicionado ao carrinho com sucesso!');
    }
  }
}
