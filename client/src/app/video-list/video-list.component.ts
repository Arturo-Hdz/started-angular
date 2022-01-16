import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = "Video List";
  title2 = "<h1>Hi there!!</h1>"
  // videoList = ["item 1", "item 2", "item 3"]
  videoList = [
    {
      name: "item 1",
      slug: "item-1",
      embed: `VtHrTX_nTto`
    },
    {
      name: "item 2",
      slug: "item-2",
      embed: `VtHrTX_nTto`
    },{
      name: "item 3",
      slug: "item-3",
      embed: null,
    },
  ]
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
  }
  getEmbedUrl(item: { embed: string; }){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+item.embed+'')
  }

}
