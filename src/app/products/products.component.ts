import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnyARecord, AnyMxRecord, AnyNaptrRecord } from 'dns';

interface Top {
  data: {
    id: number;
    attributes: {
      backgroundImg: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      topText: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      topImg: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
}

@Component({
  selector: 'ns-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  productsapi: any[] = [];
  productList: any[] = [];
  top: any[] = [];
  backgroundImg: string = '';
  topText: string = '';
  topImg: string = '';

  constructor(private http: HttpClient) {}

  getProductDetails(id: Number) {
    // console.log('ID', id);
  }

  ngOnInit() {
    this.http
      .get<any>(
        'https://starfish-app-ux8rd.ondigitalocean.app/api/products?populate=*'
      )
      .subscribe((res) => {
        // console.log(res);
        this.productsapi = res.data;
      });

    this.http
      .get<any>('https://cms.mizukiakimoto.me/api/products?populate=*')
      .subscribe((res) => {
        // console.log(res);
        this.productList = res.data;
      });

    this.http
      .get<Top>('https://cms.mizukiakimoto.me/api/mobile-top?populate=*')
      .subscribe((res) => {
        // console.log(res);
        this.backgroundImg =
          res.data.attributes.backgroundImg.data.attributes.url;
        this.topText = res.data.attributes.topText.data.attributes.url;
        this.topImg = res.data.attributes.topImg.data.attributes.url;
        console.log(this.backgroundImg);
      });
  }
}
