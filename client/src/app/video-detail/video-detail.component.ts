import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnDestroy{
  private routeSub:any;
  slug:string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params =>{
      console.log(params)
      this.slug = params['slug']
    })
    // this.route.params.subscribe(function(params){
    //   console.log(params)
    // })
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe() 
  }

}
