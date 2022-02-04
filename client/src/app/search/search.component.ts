import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchLocation = "Newport Beach"
  searchQuery = "New seacrh"
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  submitSearch(event: any, formData: any){
    console.log(event)
    console.log(formData.value)
    let query = formData.value['q']
    if(query){ 
    this.router.navigate(['/search', {q: formData.value['q']}])
    // this.http.post(endpoint, {})
  }
  }
  searchQueryChange(){
    this.searchLocation = 'California'
  }

}
