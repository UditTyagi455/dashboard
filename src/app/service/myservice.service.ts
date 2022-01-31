import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  getApiData(){
    return this.http.get('http://localhost:3000/posts')
    // return this.http.get('https://api.covid19india.org/data.json')
  }
  postApiData(data:any){
    return this.http.post('http://localhost:3000/posts',data)
  }
  deleteData(value:any){
    return this.http.delete(`http://localhost:3000/posts/${value}`);
  }
  // editData(id:any,data:any){
  //   return this.http.put(`http://localhost:3000/posts/${id}`,data)
  // }
}
