import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PurchasesService {
  constructor(private http: HttpClient) {}

  getPurchases() {
    return this.http.get<[]>('http://localhost:3333/purchases', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('crud-token')}`,
      },
    });
  }

  setPurchase(products: Object) {
    return this.http.post<[]>(
      `http://localhost:3333/purchases`,
      { products: products },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('crud-token')}`,
        },
      }
    );
  }
}
