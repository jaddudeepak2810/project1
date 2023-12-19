import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor( 
    private router: Router, 
    ){}
    // user: Object = {"firstName":"ABC","password":"ABC"};
   
    ngOnInit() {
      console.log("Signup")
      
    }
    goToLoginComp() {
      // console.log("SignupABC")
      this.router.navigate(['']);
      
    }
    onSubmitTemplateBased() {
      console.log("Signup");
  }
  user = {
    firstName: " ",
    password:  " ",
    email:" ",
    number:" "
   
};


 }
