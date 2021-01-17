import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  propertyId:number;
  constructor(private activateRoute:ActivatedRoute, private router:Router ) { }

  ngOnInit() {

    this.propertyId = +this.activateRoute.snapshot.params['id'];

    this.activateRoute.params.subscribe((params) =>
    {
         this.propertyId = +params['id']
    });
  }
  onSelectNext(){

      this.propertyId +=1;
      this.router.navigate(['/property-detail',this.propertyId]);

  }

}
