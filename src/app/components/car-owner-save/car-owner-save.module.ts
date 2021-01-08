import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CarOwnerService } from "src/app/services/car-owner.service";
import { CarService } from "src/app/services/car.service";
import { OwnerService } from "src/app/services/owner.service";
import { CarOwnerSaveRoutingModule } from "./car-owner-save-routing.module";
import { CarOwnerSaveComponent } from "./car-owner-save.component";

@NgModule({
    declarations: [CarOwnerSaveComponent],
    imports: [
        CommonModule,
        CarOwnerSaveRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        CarOwnerService,
        CarService,
        OwnerService
    ]
})

export class CarOwnerSaveModule{}