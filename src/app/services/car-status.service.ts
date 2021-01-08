import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
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
    return this.http.get<CarStatus[]>(this.carStatusUrl + 'getAll')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getCarStatusById(id: string): Observable<CarStatus>{
    return this.http.get<CarStatus>(this.carStatusUrl+'getById/'+id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  saveCarStatus(carStatus: CarStatus){
    const carStatusData = JSON.stringify(carStatus);

    if( carStatus.id == '0' ){
      console.log(`Saving new CarStatus`);
      //New
      return this.http.post<CarStatus>(this.carStatusUrl+'save', carStatusData, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    }else{
      //Edit
      console.log(`Editing new CarStatus`);
      return this.http.put<CarStatus>(this.carStatusUrl+'update/'+carStatus.id, carStatusData, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    }
  }

  deleteCarStatus(id: string): Observable<CarStatus>{
    return this.http.delete<CarStatus>(this.carStatusUrl+'/delete/'+id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
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
