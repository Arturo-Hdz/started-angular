import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = "Video List";
  title2 = "<h1>Hi there!!</h1>"
  todayDate!: Date;

  // Angular security
  dangerousUrl: string;
  trustedUrl: SafeUrl;
  dangerousVideoUrl!: string;
  videoUrl!: SafeResourceUrl;

  // videoList = ["item 1", "item 2", "item 3"]
  videoList = [
    {
      name: "item 1",
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
  constructor(private sanitizer: DomSanitizer) {
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
  }
  getEmbedUrl(item: { embed: string; }){
    // return 'https://www.youtube.com/embed/'+ item.embed +''
    return 'https://www.youtube.com/embed/'+ item.embed +''

  }

}
