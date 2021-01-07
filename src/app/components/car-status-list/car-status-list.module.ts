import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CarStatusService } from "src/app/services/car-status.service";
import { CarStatusListRoutingModule } from "./car-status-list-routing.module";
import { CarStatusListComponent } from "./car-status-list.component";

@NgModule({
    declarations: [CarStatusListComponent],
    imports: [
        CommonModule,
        CarStatusListRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [CarStatusService]
})

export class CarStatusListModule{}