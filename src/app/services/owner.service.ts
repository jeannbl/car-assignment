import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Owner } from '../model/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private onwerUrl = 'http://localhost:8080/owners/';
  private httpOptions = {
    headers: ({ 'Content-type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getAllOwners(): Observable<Owner[]>{
    return this.http.get<Owner[]>(this.onwerUrl+'/getAll')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getOwnerById(onwerId: string): Observable<Owner>{
    return this.http.get<Owner>(this.onwerUrl+'getById/'+ onwerId)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  saveOwner(onwer: Owner): Observable<Owner>{
    const onwerData = JSON.stringify(onwer);

    if(onwer.id == '0'){
      //new
      return this.http.post<Owner>(this.onwerUrl+'new', onwerData, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }else{
      return this.http.put<Owner>(this.onwerUrl+'update/'+onwer.id, onwerData, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
  }

  deleteOwner(ownerId: string): Observable<Owner>{
    return this.http.delete<Owner>(this.onwerUrl+'delete/'+ownerId)
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
