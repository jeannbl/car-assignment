import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CarOwner } from '../model/car-owner';

@Injectable({
  providedIn: 'root'
})
export class CarOwnerService {

  carOwnerUrl = 'http://localhost:8080/carowners/';
  httpOptions = {
    headers: ({ 'Content-type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getAllCarOwners(): Observable<CarOwner[]>{
    return this.http.get<CarOwner[]>(this.carOwnerUrl+'getAll')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getCarOwnerById(id: string): Observable<CarOwner>{
    return this.http.get<CarOwner>(this.carOwnerUrl+'getById/'+id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  saveCarOwner(carOwner: CarOwner): Observable<CarOwner>{
    let carOwnerData = JSON.stringify(carOwner);

    if(carOwner.id == '0'){
      //new
      return this.http.post<CarOwner>(this.carOwnerUrl+'save', carOwnerData, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }else{
      return this.http.put<CarOwner>(this.carOwnerUrl+'update/'+carOwner.id, carOwnerData, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
    
  }

  deleteCarOwner(id: string){
    return this.http.delete<CarOwner>(this.carOwnerUrl+'delete/'+id)
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
