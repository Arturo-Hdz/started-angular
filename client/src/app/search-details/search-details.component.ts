import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit, OnDestroy {
  private routeSub:any;
  query: string | undefined; 
  constructor(private  route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params=>{
      console.log(params)
      this.query = params['q']
    })
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }


}
