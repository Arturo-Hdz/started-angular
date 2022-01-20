import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // prevented = false;
  homeImageList = [
    {image: "assets/images/nature/4.jpg", title:"image 4", link:'/videos/video-1'},
    {image: "assets/images/nature/5.jpg", title:"image 5", link:'/videos/video-1'},
    {image: "assets/images/nature/6.jpg", title:"image 6", link:'/videos/video-1'},
    {image: "assets/images/nature/4.jpg", title:"image 4", link:'/videos/video-1'}

  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
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
