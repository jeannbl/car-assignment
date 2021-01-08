import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CarStatus } from 'src/app/model/car-status';
import { CarStatusService } from 'src/app/services/car-status.service';

@Component({
  selector: 'app-car-status-save',
  templateUrl: './car-status-save.component.html',
  styleUrls: ['./car-status-save.component.css']
})
export class CarStatusSaveComponent implements OnInit {

  public carStatusId: string;
  public mode: string;
  carStatus = new CarStatus();

  constructor( private activatedRoute: ActivatedRoute, private carStatusService: CarStatusService,
               private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( (params: Params) =>{
      this.carStatusId = params['id'];
      console.info(`Into ngOnInit- carStatusId ${this.carStatusId}`);

      if(this.carStatusId !== undefined){
        //edit
        this.mode = 'Edit';
        this.getCarStatusById(this.carStatusId);
      }else{
        //add
        this.mode = 'Add';
        this.carStatus['id'] = '0';
      }
    });
  }

  getCarStatusById(id): void{
    this.carStatusService.getCarStatusById(id).subscribe( (data: CarStatus) => {
      this.carStatus = data;
    });
  }

  onCarStatusSubmit(form){
    this.carStatusService.saveCarStatus(this.carStatus).subscribe( (data: CarStatus) =>{
      this.carStatus = data;
      console.log(`onCarStatusSubmit carStatus ${this.carStatus}`);
    });
    this.router.navigate(['/car-status-list']);
  }

  onCLickCancelCarStatus(){
    this.router.navigate(['/car-status-list']);
  }
}
