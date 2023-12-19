import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css']
})
export class EmployeetableComponent {
  name: string ="";
  address: string ="";
  mobile: Number =0;

  constructor(private http: HttpClient) 
  {}

register()
  {
  
    let bodyData = {
      "customername" : this.name,
      "address" : this.address,
      "mobile" : this.mobile
    };
 
    this.http.post("http://localhost:8085/api/v1/customer/save",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully")
      
        this.name = '';
        this.address = '';
       this.mobile  = 0;
    });
  }
save()
  {
        this.register();
  }
}




