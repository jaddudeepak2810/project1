import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( 
    private router: Router, 
    ){}
    // user: Object = {"firstName":"ABC","password":"ABC"};
   
    ngOnInit() {
      console.log("login")
      
    }
    goToLoginComp() {
      // console.log("SignupABC")
      this.router.navigate(['']);
      
    }
    onSubmitTemplateBased() {
      console.log("login");
  }
  user = {
    firstName: 'John',
    password:  'test'
};


 }


