import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CarOwnerService } from "src/app/services/car-owner.service";
import { CarOwnerListRoutingModule } from "./car-owner-list-routing.module";
import { CarOwnerListComponent } from "./car-owner-list.component";

@NgModule({
    declarations: [CarOwnerListComponent],
    imports: [
        CommonModule,
        CarOwnerListRoutingModule,
        HttpClientModule
    ],
    providers: [CarOwnerService]
})

export class CarOwnerListModule{}