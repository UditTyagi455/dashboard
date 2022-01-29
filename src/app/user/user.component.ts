import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private apidata:MyserviceService) { }
  myArray: any;

  ngOnInit(): void {
   this.getData()
  }
  getData(){
    this.apidata.getApiData().subscribe(
      data =>{
        this.myArray =data
      }
    )
  }
  hello(){
    this.apidata.getApiData().subscribe(
      data =>{
        console.log("data :",data);
        
      }
    );
  }
  deleteBtn(value:any){
    this.apidata.deleteData(value).subscribe(
      data =>{
        alert("Record Deleted");
        this.getData();
      }
    )   
  }

}
