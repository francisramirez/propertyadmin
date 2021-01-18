import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerationForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.registerationForm = new FormGroup({
      userName: new FormControl('Mark',Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required, Validators.minLength(8)]),
      confirmPassword:new FormControl(null,[Validators.required]),
      mobile:new FormControl(null,[Validators.required, Validators.maxLength(10)])
    },this.passwordMatchingValidator);
  }
  onSubmit(){
    console.log(this.registerationForm);
  }
  passwordMatchingValidator(fg:FormGroup):Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {
      notmatched:true
    }
  }
}
