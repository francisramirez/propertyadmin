import { Component, OnInit } from '@angular/core';
import { Property } from '../model/property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<any> = [ {
    "Id":1,
    "Name":"My House",
    "Type":"House",
    "Price":1000
 },
 {
  "Id":1,
  "Name":"Your Apartment",
  "Type":"Apartment",
  "Price":2000
},
{
  "Id":1,
  "Name":"Martha Villa",
  "Type":"Villa",
  "Price":2000
},
{
  "Id":1,
  "Name":"Juan House",
  "Type":"House",
  "Price":2500
}, {
  "Id":1,
  "Name":"My House",
  "Type":"House",
  "Price":2000
}, {
  "Id":1,
  "Name":"My House",
  "Type":"House",
  "Price":2000
}
];
  constructor() { }

  ngOnInit(): void {
  }

}
