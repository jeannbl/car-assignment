import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(){
    return this.carService.getCars().subscribe( data => {
      this.cars = data;
    } );
  }

  onClickAddCar(){
    this.router.navigate(['/car-save']);
  }

  onClickEditCar(carId){
    this.router.navigate(['/car-save'], {queryParams: {id: carId}});
  }

  onClickDeleteCar(carId: string){
    if(window.confirm('Are you sure to delete?')){
      return this.carService.deleteCar(carId).subscribe( data => {
        this.loadCars();
      } );
    }
  }

}
