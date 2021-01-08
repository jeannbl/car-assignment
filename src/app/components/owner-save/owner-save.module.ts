import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { OwnerService } from "src/app/services/owner.service";
import { OwnerSaveRoutingModule } from "./owner-save-routing.module";
import { OwnerSaveComponent } from "./owner-save.component";

@NgModule({
    declarations: [OwnerSaveComponent],
    imports: [
        CommonModule,
        OwnerSaveRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [OwnerService]
})

export class OwnerSaveModule{}