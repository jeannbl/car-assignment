import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-save',
  templateUrl: './car-save.component.html',
  styleUrls: ['./car-save.component.css']
})
export class CarSaveComponent implements OnInit {

  public carId: string;
  public mode: string;
  //public car = <Car>{};
  car = new Car();

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( (params: Params) => {
      this.carId = params['id'];

      if( this.carId !== undefined ){
        this.getCarById(this.carId);
        this.mode = 'Edit';
        console.log(`Edit car ${this.car}`)
      }else{
        this.car['id'] = '0';
        this.mode = 'Add';
      }
    });
  }

  getCarById(id): void {
    this.carService.getCarById(id).subscribe( (data: Car) => {
      this.car = data;
      console.log('carSave- '+this.car);
    });
  }

  onCarSubmit(form){
    this.carService.saveCar(this.car).subscribe(  (data: Car) => {
      this.car = data;
    });
    this.router.navigate(['/car-list']);
  }

  onClickCancelCar(){
    this.router.navigate(['/car-list']);
  }
}
