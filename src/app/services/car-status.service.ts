import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CarStatus } from '../model/car-status';

@Injectable({
  providedIn: 'root'
})
export class CarStatusService {

  private carStatusUrl: string = 'http://localhost:8080/carstatus/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAllCarStatus(): Observable<CarStatus[]>{
    return this.http.get<CarStatus[]>(this.carStatusUrl + 'getAll');
  }



  handleError(fail: any){
    let errorMessage = '';

    if( fail.error instanceof ErrorEvent){
      errorMessage = fail.error.message;
    }else{
      errorMessage = `Error code: ${fail.status} \nMessage: ${fail.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
