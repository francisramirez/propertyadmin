import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formPropertyTabs') formPropertyTabs: TabsetComponent;

  constructor(private router:Router) { }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['user/login']);
    }
  }
  onBack(){
        this.router.navigate(['/']);
  }
  onSubmit(form:NgForm){
    console.log(this.addPropertyForm);
  }
  onSelectTab(tabIndex:number) {
    this.formPropertyTabs.tabs[tabIndex].active = true;
  }

}
