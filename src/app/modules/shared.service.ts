import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  response:any;
  constructor(private httpClient:HttpClient) {
    
   }

   getBlogData(){
     this.httpClient.get("assets/data/blog.json").subscribe((data)=>{
       this.response = data;
       console.log(this.response)
      //  return this.response;
     })
     console.log(this.response)
   }
}
