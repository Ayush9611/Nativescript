import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnyARecord, AnyMxRecord, AnyNaptrRecord } from 'dns';

@Component({
  selector: 'ns-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  productsapi: any[] = [];

  constructor(private http: HttpClient) {}

  getProductDetails(id: Number) {
    console.log('ID', id);
  }

  ngOnInit() {
    this.http
      .get<any>(
        'https://starfish-app-ux8rd.ondigitalocean.app/api/products?populate=*'
      )
      .subscribe((res) => {
        console.log(res);
        this.productsapi = res.data;
      });
  }
}
