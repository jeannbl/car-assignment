import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CarService } from "src/app/services/car.service";
import { CarListRoutingModule } from "./car-list-routing.module";
import { CarListComponent } from "./car-list.component";

@NgModule({
    declarations: [CarListComponent],
    imports: [
        CommonModule,
        CarListRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [CarService]
})

export class CarListModule{}