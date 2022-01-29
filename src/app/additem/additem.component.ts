import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
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

  formValue:any;
 //object of AddItemModel class
 private addItemModelObj =new AddItemModel();
  ngOnInit(): void {
  this.formValue = this.formbuilder.group({
    name: [''],
    email: [''],
    city: ['']
  })
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
