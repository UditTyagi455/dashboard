import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import {Router} from '@angular/router'
import {User} from "../user"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }
  userModel =new User("","");
  ngOnInit(): void {
  }
  onSubmit(value:any){
    console.log("value: ",value);
    if(value.emailfield === "u@gmail.com" && value.passfield === '1234'){
       this.route.navigate(['/user']);
    }else {
      alert("please enter again")
    }
    
  }
  

}
