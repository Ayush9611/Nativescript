import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnyARecord, AnyMxRecord, AnyNaptrRecord } from 'dns';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  myTitle = 'This title is from the component';
  productsapi: any[] = [];

  constructor(private http: HttpClient) {}

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

  products: any[] = [
    {
      id: 1,
      title: 'NNNNN',
      price: 100,
      image:
        'https://images.unsplash.com/photo-1596405367208-63505402f113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlbGV2aXNpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius lorem felis, a aliquam orci malesuada sit amet. Donec consequat nunc id sem euismod, sit amet mattis arcu elementum.',
    },
    {
      id: 2,
      title: 'MMMMM',
      price: 200,
      image:
        'https://images.unsplash.com/photo-1595935736128-db1f0a261263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlbGV2aXNpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius lorem felis, a aliquam orci malesuada sit amet. Donec consequat nunc id sem euismod, sit amet mattis arcu elementum.',
    },
    {
      id: 3,
      title: 'LLLLL',
      price: 300,
      image:
        'https://images.unsplash.com/photo-1558888401-3cc1de77652d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlbGV2aXNpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius lorem felis, a aliquam orci malesuada sit amet. Donec consequat nunc id sem euismod, sit amet mattis arcu elementum.',
    },
    {
      id: 3,
      title: 'LLLLL',
      price: 300,
      image:
        'https://images.unsplash.com/photo-1558888401-3cc1de77652d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlbGV2aXNpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius lorem felis, a aliquam orci malesuada sit amet. Donec consequat nunc id sem euismod, sit amet mattis arcu elementum.',
    },
  ];
}
