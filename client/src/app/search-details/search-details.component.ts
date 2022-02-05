import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../videos/videos.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css'],
  providers: [VideoService]
})
export class SearchDetailsComponent implements OnInit, OnDestroy {
  private routeSub:any;
  query: string | undefined; 
  private req: any;
  videoList: [any] | undefined;

  constructor(private  route: ActivatedRoute,
    private _video: VideoService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params=>{
      console.log(params)
      this.query = params['q']
      this.req = this._video.search(this.query).subscribe(data=>{
        this.videoList = data as [any];
      })
    })
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }


}
