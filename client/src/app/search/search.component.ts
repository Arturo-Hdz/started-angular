import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchLocation = "Newport Beach"
  // searchQuery = "New search"
  searchQuery: string | undefined

@Input()
passedQuery: string | undefined;

  
constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.passedQuery)
    if (this.passedQuery){
      this.searchQuery = this.passedQuery
    }
  }
  submitSearch(event: any, formData: any){
    console.log(event)
    console.log(formData.value)
    let searchedQuery = formData.value['q']
    if(searchedQuery){ 
    this.router.navigate(['/search', {q: formData.value['q']}])
    // this.http.post(endpoint, {})
  }
  }
  searchQueryChange(){
    this.searchLocation = 'California'
  }

}
