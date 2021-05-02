import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetListService {


  constructor(private httpClient:HttpClient) { }

  baseUrl: string = "https://api.publicapis.org";

  getList() {
    return this.httpClient.get(`${this.baseUrl}/entries`)
  }

  getCategories() {
    return this.httpClient.get(`${this.baseUrl}/categories`)
  }

  ///get list by title
  getListByTitle(title:string) {
    return this.httpClient.get(`${this.baseUrl}/entries?title=${title}`)
  }



///get list by category
  getListByCategory(category) {
    return this.httpClient.get(`${this.baseUrl}/entries?category=${category}`)
  }



}
