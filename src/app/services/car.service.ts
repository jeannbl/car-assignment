import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Car } from '../model/car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carUrl: string = 'http://localhost:8080/cars/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type' : 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]>{
    return this.http.get<Car[]>(this.carUrl + 'getAll')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getCarById(carId: string): Observable<Car>{
    return this.http.get<Car>(this.carUrl + 'getById/'+ carId)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  saveCar(car: Car): Observable<Car>{
    const carData = JSON.stringify(car);
    console.log(`car ${car} - carData ${carData} `);

    if(car.id == '0'){
      //New car
      console.log('Guardando nuevo');
      return this.http.post<Car>(this.carUrl+'new', carData, this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }else{
      //Edit car
      console.log('Editando car');
      return this.http.put<Car>(this.carUrl+'update/'+car.id, carData, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
  }

  deleteCar(carId: string): Observable<Car>{
    return this.http.delete<Car>(this.carUrl+'/delete/'+carId)
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
