import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) { }
  GetMovieData():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?i=tt3896198&apikey=bf8412fa');
  }
}
