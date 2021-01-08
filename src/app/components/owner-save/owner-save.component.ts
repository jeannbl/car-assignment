import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Owner } from 'src/app/model/owner';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-owner-save',
  templateUrl: './owner-save.component.html',
  styleUrls: ['./owner-save.component.css']
})
export class OwnerSaveComponent implements OnInit {

  ownerId: string;
  mode: string;
  owner = new Owner();

  constructor(private activatedRoute: ActivatedRoute, private ownerService: OwnerService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( (params: Params) => {
      this.ownerId = params['id'];
      console.log(`onwerId ${this.ownerId}`);

      if(this.ownerId !== undefined){
        //update
        this.mode = 'Edit';
        this.getOwnerById(this.ownerId);
      }else{
        this.mode = 'Add';
        this.owner['id'] = '0';
      }
    });
  }

  getOwnerById(ownerId: string){
    this.ownerService.getOwnerById(ownerId).subscribe( (data) => {
      this.owner = data;
    });
  }

  onOwnerSubmit(form){
    this.ownerService.saveOwner(this.owner).subscribe( data => {
      this.owner = data;
    })
    this.router.navigate(['/owner-list']);
  } 
  
  onClickCancelOwner(){
    this.router.navigate(['/owner-list']);
  }
}
