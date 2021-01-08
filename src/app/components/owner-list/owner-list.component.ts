import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from 'src/app/model/owner';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  owners : Owner[] = [];

  constructor(private ownerService: OwnerService, private router: Router) { }

  ngOnInit(): void {
    this.loadOwners()
  }

  loadOwners(): void{
    this.ownerService.getAllOwners().subscribe( (data) => {
      this.owners = data;
    });
  }
  
  onClickNewOwner(){
    this.router.navigate(['/owner-save']);
  }

  onClickEditOwner(ownerId: string){
    this.router.navigate(['/owner-save'], {queryParams: {id: ownerId}});
  }

  onClickDeleteOwner(ownerId: string){
    if(window.confirm('Are you sure to delete Owner?')){
      return this.ownerService.deleteOwner(ownerId).subscribe( data => {
        this.loadOwners();
      } );
    }
  }
}
