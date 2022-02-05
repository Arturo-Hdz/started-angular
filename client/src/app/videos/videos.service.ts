import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

const endpoint = 'assets/json/videos.json' // yourdomain.com/api/videos
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private http: HttpClient) { }
  list(){
    return this.http.get(endpoint)
    // .map((Response: { json: () => any; })=>Response.json())
    map((response: { json: () => any; })=>response.json())
    catchError(this.handleError)
  }

  get(slug: string | undefined){
    return this.http.get(endpoint)
    // .map((Response: { json: () => any; })=>Response.json())
    map((response: { json: () => any; })=>{
      // let data = response.json().filter(item=>{
      let data = response.json().filter((item: { slug: string | undefined; }): any=>{
        
        if(item.slug == slug){
          return item
        }
      })
      console.log(data)
      if (data.length == 1){
        return data[0]
      }
      return {}
    })

    catchError(this.handleError)
  }
  private handleError(error:any, caught:any): any{
    console.log(error, caught)
  }
}