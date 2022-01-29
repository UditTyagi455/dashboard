import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';
import {AddItemModel} from './addItem.model'

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private apiData: MyserviceService,private route:Router) { }

 //object of AddItemModel class
 private addItemModelObj =new AddItemModel();

  ngOnInit(): void {}
  formValue = this.formbuilder.group({
    name: ['',[Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    email: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    city: ['',[Validators.required]]
  }
    
  )


  get checkValidName(){
    console.log("line 30: ",this.formValue);
    
    return this.formValue.get('name')
  }
  get checkValidEmail(){
    return this.formValue.get('email')
  }
  get checkValidCity(){
   return this.formValue.get('city');
  }

  onSubmit(){
    this.addItemModelObj.name =this.formValue.value.name;
    this.addItemModelObj.email =this.formValue.value.email;
    this.addItemModelObj.city =this.formValue.value.city;
 
    this.apiData.postApiData(this.addItemModelObj).subscribe(
      data =>{
        alert("value added")
        this.route.navigate(['/user'])
      }

    )
   
  }
}
