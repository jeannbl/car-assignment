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

  selectedDay: string = '';
  carSelected: string = '';
  owerSelected: string = '';

  cars : Car[] = [];
  owners: Owner[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private carOwnerService: CarOwnerService, private carService: CarService, private ownerService: OwnerService) { }

  ngOnInit(): void {
    console.log(`En ngOnInit`);
    this.activatedRoute.queryParams.subscribe( (params: Params) => {
      this.carOwnerId = params['id'];

      if(this.carOwnerId !== undefined){
        //edit
        this.mode = 'Edit';
        this.getCarOwnerById(this.carOwnerId);
      }else{
        this.mode = 'Add';
        this.carOwner['id'] = '0';
      }
      console.log(`ngOnInit - carOnerId ${this.carOwnerId}`);
    });

    this.getAvailableCars();
    this.getOwners();
  }

  getCarOwnerById(carOwnerId: string){
    this.carOwnerService.getCarOwnerById(carOwnerId).subscribe( data=>{
      this.carOwner = data;
      console.log(`this car owner - ${this.carOwner}`);
    });
  }

  onCarOwnerSubmit(form){
    this.carOwnerService.saveCarOwner(this.carOwner).subscribe( data=> {
      console.log(`Car owner ${this.carOwner} was registered`);
    });
  }

  onCLickCancelCarOwner(){
    this.router.navigate(['/car-owner-list']);
  }

  
  getAvailableCars(){
    this.carService.getAvailableCars().subscribe( data => {
      this.cars = data;
      console.log(`cars - ${this.cars}`);
    });
  }

  getOwners(){
    this.ownerService.getAllOwners().subscribe( data => {
      this.owners = data;
      console.log(`owners - ${this.owners}`);
    });
  }

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }

  carSelectChange(event: any){
    this.carSelected = event.target.value;
    console.log(`car selected ${this.carSelected}`);
  }

  ownerSelectChange(event: any){
    this.owerSelected = event.target.value;
    console.log(`Owner selected ${this.owerSelected}`);
  }

}
