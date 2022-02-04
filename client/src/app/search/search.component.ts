import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchLocation = "Newport Beach"
  searchQuery = "New seacrh"
  constructor() { }

  ngOnInit(): void {
  }
  submitSearch(event: any, formData: any){
    console.log(event)
    console.log(formData.value)
    // this.http.post(endpoint, {})
  }
  searchQueryChange(){
    this.searchLocation = 'California'
  }

}
