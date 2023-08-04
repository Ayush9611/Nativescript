import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnyARecord, AnyMxRecord, AnyNaptrRecord } from 'dns';
import { ActivatedRoute } from '@angular/router';

interface Product {
  id: number;
  attributes: {
    ProductName: string;
    Price: string;
    ProductDescription: string;
  };
}
@Component({
  selector: 'ns-productdetails',
  templateUrl: './productdetails.component.html',
})
export class ProductdetailsComponent implements OnInit {
  //we check for the product id in the URL
  //take the id and pass the id to the Strapi API
  product: Product;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    let productID = this.route.snapshot.paramMap.get('id');

    this.http
      .get<Product>(
        'https://starfish-app-ux8rd.ondigitalocean.app/api/products' +
          productID +
          '?populate=*'
      )
      .subscribe((res) => {
        console.log('product', res);
        this.product = res;
      });
  }
}
