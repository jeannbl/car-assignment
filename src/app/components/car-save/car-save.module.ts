import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CarService } from "src/app/services/car.service";
import { CarSaveRoutingModule } from "./car-save-routing.module";
import { CarSaveComponent } from "./car-save.component";

@NgModule({
    declarations: [CarSaveComponent],
    imports: [
        CommonModule,
        CarSaveRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [CarService]
})
export class CarSaveModule{}