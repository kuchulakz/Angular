import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  apiUrl= 'https://opulent-couscous-9g95q7g7v5v3956j-3000.app.github.dev/'

  constructor(private http:HttpClient) 
  { }

  addDetails()
  {

  }
  getDetails()
}
