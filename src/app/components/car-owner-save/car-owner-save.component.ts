import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Car } from 'src/app/model/car';
import { CarOwner } from 'src/app/model/car-owner';
import { Owner } from 'src/app/model/owner';
import { CarOwnerService } from 'src/app/services/car-owner.service';
import { CarService } from 'src/app/services/car.service';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-car-owner-save',
  templateUrl: './car-owner-save.component.html',
  styleUrls: ['./car-owner-save.component.css']
})
export class CarOwnerSaveComponent implements OnInit {

  public carOwnerId: string;
  public mode: string;

  carOwner = new CarOwner();
  car = new Car();
  owner = new Owner();

  carIdSelected: string = null;
  ownerIdSelected: string = null;

  cars : Car[] = [];
  owners: Owner[] = [];
  lista:string[]=["hola","que","tal", "estas"];

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private carOwnerService: CarOwnerService, private carService: CarService, 
              private ownerService: OwnerService) { }

  ngOnInit(): void {
    console.log(`ngOnInit - carOner ${this.carOwner}`);
    this.activatedRoute.queryParams.subscribe( (params: Params) => {
      this.carOwnerId = params['id'];
      this.getAvailableCars();
      this.getOwners();

      if(this.carOwnerId !== undefined){
        this.mode = 'Edit';
        this.getCarOwnerById(this.carOwnerId);
      }else{
        this.mode = 'Add';
        this.carOwner['id'] = '0';    
      }
    });
  }

  getCarOwnerById(carOwnerId: string){
    this.carOwnerService.getCarOwnerById(carOwnerId).subscribe( data=>{
      this.carOwner = data;
      console.log(`getCarOwnerById - carID: ${this.carOwner.carId}`);
    });
  }

  getAvailableCars(){
    this.carService.getAvailableCars().subscribe( data => {
      this.cars = data;
    });
  }

  getOwners(){
    this.ownerService.getAllOwners().subscribe( data => {
      this.owners = data;
    });
  }

  onCarOwnerSubmit(form){
    this.carOwner.carId = this.carIdSelected;
    this.carOwner.ownerId = this.ownerIdSelected;

    if(this.carIdSelected !== null && this.ownerIdSelected !== ""){
      this.carOwnerService.saveCarOwner(this.carOwner).subscribe( data=> {
        console.log('Car owner '+data+' was registered');
      });
    }else{
      console.log('You must select a car and an owner.');
    }
    this.router.navigate(['/car-owner-list']);
  }

  onCLickCancelCarOwner(){
    this.router.navigate(['/car-owner-list']);
  }

}
