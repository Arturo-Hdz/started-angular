import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
// import { HttpClient } from '@angular/common/http';
import { VideoService } from '../videos/videos.service';
import { VideoItem } from '../videos/video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit, OnDestroy{
  private req: any;
  title = "Video List";
  title2 = "<h1>Hi there!!</h1>"
  todayDate!: Date;

  // Angular security
  dangerousUrl: string;
  trustedUrl: SafeUrl;
  dangerousVideoUrl!: string;
  videoUrl!: SafeResourceUrl;

  // videoList = ["item 1", "item 2", "item 3"]
// videoList2 = [VideoItem];
  videoList = [
    {
      name: "Welcome",
      slug: "item-1",
      embed: `MM7v61MvHco`
    },
    {
      name: "item 2",
      slug: "item-2",
      embed: `MM7v61MvHco`
    },{
      name: "item 3",
      slug: "item-3",
      embed: null,
    },
  ]
  // constructor() {}


  // Angular Security
  constructor(private sanitizer: DomSanitizer,
    // private http:HttpClient,
    private _video:VideoService) {

    // javascript: URLs are dangerous if attacker controlled.
    // Angular sanitizes them in data binding, but you can
    // explicitly tell Angular to trust this value:
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
    this.updateVideoUrl('PUBnlbjZFAI');
  }
  updateVideoUrl(id: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    this.videoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }




  ngOnInit(): void {
    this.todayDate = new Date()
    // this.req = this.http.get("assets/json/videos.json").subscribe(data=>{
    this.req = this._video.list().subscribe(data=>{
    console.log(data)
      // this.req = data;
      // this.videoList = data as [any];
      this.videoList = data as [];
    })
  }

  ngOnDestroy(): void {
    this.req.unsuscribe()
  }

  getEmbedUrl(item: { embed: string; }){
    // return 'https://www.youtube.com/embed/'+ item.embed +''
    return 'https://www.youtube.com/embed/'+ item.embed +''

  }

}
