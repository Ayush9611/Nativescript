import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnyARecord, AnyMxRecord, AnyNaptrRecord } from 'dns';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-productdetails',
  templateUrl: './productdetails.component.html',
})
export class ProductdetailsComponent implements OnInit {
  //we check for the product id in the URL
  //take the id and pass the id to the Strapi API
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let productID = this.route.snapshot.paramMap.get('id');
    console.log('product id', productID);
  }
}
