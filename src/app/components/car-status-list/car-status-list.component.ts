import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarStatus } from 'src/app/model/car-status';
import { CarStatusService } from 'src/app/services/car-status.service';

@Component({
  selector: 'app-car-status-list',
  templateUrl: './car-status-list.component.html',
  styleUrls: ['./car-status-list.component.css']
})
export class CarStatusListComponent implements OnInit {

  carStatusList: CarStatus[] = [];

  constructor(private carStatusService: CarStatusService, private router: Router) { }

  ngOnInit(): void {
    this.loadCarStatus();
  }

  loadCarStatus(){
    this.carStatusService.getAllCarStatus().subscribe( data => {
      this.carStatusList = data;
    } );
  }

  onCLickNewCarStatus(){
    this.router.navigate(['/car-status-save']);
  }

  onClickEditCarStatus(id: string){
    this.router.navigate(['/car-status-save'], {queryParams: {id: id}});
  }

  onCLickDeleteCarStatus(id: string){
    if(window.confirm('Are you sure to delete Car status?')){
      return this.carStatusService.deleteCarStatus(id).subscribe( data => {
        this.loadCarStatus();
      } );
    }
  }

}
