import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productList:Array<any>=[
    {name:"Rice",price:200},
    {name:"sugar",price:100}
  ];

}
