import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarOwner } from 'src/app/model/car-owner';
import { CarOwnerService } from 'src/app/services/car-owner.service';

@Component({
  selector: 'app-car-owner-list',
  templateUrl: './car-owner-list.component.html',
  styleUrls: ['./car-owner-list.component.css']
})
export class CarOwnerListComponent implements OnInit {

  carOwners: CarOwner[] = [];

  constructor(private carOwnerService: CarOwnerService, private router: Router) { }

  ngOnInit(): void {
    this.loadCarOnwers();
  }

  loadCarOnwers(){
    this.carOwnerService.getAllCarOwners().subscribe( data => {
      this.carOwners = data;
      console.log(`loadCarOnwers ${this.carOwners}`);
    });
  }

  onCLickNewCarOwner(){
    this.router.navigate(['/car-owner-save']);
  }

  onClickEditCarOwner(carOwnerId: string){
    this.router.navigate(['/car-owner-save'], {queryParams: {id: carOwnerId}});
  }

  onClickDeleteCarOwner(){

  }
}
