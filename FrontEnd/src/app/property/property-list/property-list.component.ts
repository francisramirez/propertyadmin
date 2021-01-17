import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../model/property';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent:number=1;
  Properties: Array<Property>;

  constructor(private activeRouter:ActivatedRoute,
              private housingService: HousingService) { }

  ngOnInit(): void {
    this.getProperties();
  }
  private getProperties(){

    if (this.activeRouter.snapshot.url.toString()) {
      this.SellRent= 2; //Means we are on rent-property URL else we are on base URL.
    }

    this.housingService.getAllProperties(this.SellRent).subscribe(data =>
      {
        this.Properties= data;
      },error => {
        console.log(error);
      });
  }

}
