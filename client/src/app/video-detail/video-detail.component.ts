import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnDestroy{
  private routeSub:any;
  private req:any;
  video = {
      name: "Default",
      slug: "item5",
      embed: "nefbehbjhberfhbejh"
  }
  // video: any;
  slug:string | undefined;

  constructor(private route: ActivatedRoute,
              private http:HttpClient) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params =>{
      console.log(params)
      this.slug = params['slug']
      this.http.get('assets/json/videos.json').subscribe(data=>{
        ((item: any)=>{
          console.log(item)
          if (item.slug == this.slug){
            console.log(item)
            this.video = item;
          }
        })
      })
    })
    // this.route.params.subscribe(function(params){
    //   console.log(params)
    // })
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe() 
    this.req.unsubscribe()
  }

}
