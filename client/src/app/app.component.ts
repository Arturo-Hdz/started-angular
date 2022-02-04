import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h1> {{ title }}</h1> <p>{{ description }} is cool </p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Hellon srvup! 2';
  description = 'A new App'
  private routeSub: any;
  query: string | undefined;

constructor(private route: ActivatedRoute){}

  ngOnInit() {
  this.routeSub = this.route.params.subscribe(params=>{
    console.log(params)
    this.query = params['q']
})
}
  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }
  
}