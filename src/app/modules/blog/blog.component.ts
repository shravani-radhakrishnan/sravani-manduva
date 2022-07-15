import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  bloginfo:any;
  constructor(private sharedService:SharedService,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getBlogInfo()
  }
  getBlogInfo(){
    // this.bloginfo = this.sharedService.getBlogData()
    this.httpClient.get("assets/data/blog.json").subscribe((data)=>{
      this.bloginfo = data;
      console.log(this.bloginfo)
    })
  }


}
