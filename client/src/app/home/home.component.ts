import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // prevented = false;
  private req: any;
  homeImageList = [
    {image: "assets/images/nature/4.jpg", title:"image 4", link:'/videos/video-1'},
    {image: "assets/images/nature/5.jpg", title:"image 5", link:'/videos/video-1'},
    {image: "assets/images/nature/6.jpg", title:"image 6", link:'/videos/video-1'},
    {image: "assets/images/nature/4.jpg", title:"image 4", link:'/videos/video-1'}
  ]
  homeImageList2 = [
    {image: "assets/images/nature/4.jpg", name:"image 4", slug:'/videos/video-1'},
    {image: "assets/images/nature/5.jpg", name:"image 5", slug:'/videos/video-2'},
    {image: "assets/images/nature/6.jpg", name:"image 6", slug:'/videos/video-3'},
  ]
  constructor(private router:Router,
              private http:HttpClient) { }

  ngOnInit(): void {
    this.req = this.http.get('assets/json/videos.json').subscribe(data=>{
      console.log(data);

      ((item: any)=>{
        if (item.featured){
          console.log(item)
          this.homeImageList2.push(item);
        }
      })
      // this.homeImageList2 = data as [];
          })
  }


  ngOnDestroy(): void {
    this.req.unsubscribe()
  }

  preventNormal(event:MouseEvent, image:any){
    if (!image.prevented){
    // console.log(image.getAttribute("href"))
    event.preventDefault()
    // image.setAttribute("href", "/videos")
    // image.link = '/videos'
    // image.prevented = true;
    this.router.navigate(['./videos'])
    }
    // alert("Working....")
  }
}
