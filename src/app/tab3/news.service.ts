import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getCarNews(): Observable<any> {
    const url = 'https://newsapi.org/v2/everything?q=cars&apiKey=94d70ff886cc462e8d9c8e830f0ecdd0';
    return this.http.get(url);
  }
}
