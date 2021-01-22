import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../Model/User';
import { UserService } from '../services/user.service';
import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerationForm: FormGroup;
  user:User;
  userSubmitted:boolean;
  constructor(private fb:FormBuilder, private userService:UserService) {

   }

  ngOnInit() {
    this.createRegisterationForm();
    localStorage.clear();
  }
  onSubmit(){

    this.userSubmitted= true;

    if (this.registerationForm.valid) {

      this.user = this.userInformation;
      this.userService.addUser(this.user);
      this.registerationForm.reset();
      this.userSubmitted=false;
      alertify.success('Congrats, you are successfully registered.');

    }
    else{
      alertify.error('Kindly provide the required fields');
    }

  }
  createRegisterationForm(){
    this.registerationForm =  this.fb.group({
      userName:[null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password:[null, [Validators.required, Validators.minLength(8)]],
      confirmPassword:[null, Validators.required],
      mobile:[null,[Validators.required, Validators.maxLength(10)]]
   },{validators:this.passwordMatchingValidator});
  }
  passwordMatchingValidator(fg:FormGroup):Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {
      notmatched:true
    };
  }

  get userName()
  {
    return this.registerationForm.get('userName') as FormControl;
  }
  get email()
  {
    return this.registerationForm.get('email') as FormControl;
  }
  get password()
  {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword()
  {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile()
  {
    return this.registerationForm.get('mobile') as FormControl;
  }
  get userInformation(): User{

    return this.user = {
        userName: this.userName.value,
        email:this.email.value,
        password:this.password.value,
        confirmPassword:this.confirmPassword.value,
        mobile:this.mobile.value
    };
  }
}
