import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CarStatusService } from "src/app/services/car-status.service";
import { CarStatusSaveRoutingModule } from "./car-status-save-routing.module";
import { CarStatusSaveComponent } from "./car-status-save.component";

@NgModule({
    declarations: [CarStatusSaveComponent],
    imports: [
        CommonModule,
        CarStatusSaveRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [CarStatusService]
})
export class CarStatusSaveModule{}