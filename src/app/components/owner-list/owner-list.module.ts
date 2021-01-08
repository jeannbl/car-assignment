import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { OwnerService } from "src/app/services/owner.service";
import { OwnerListRoutingModule } from "./owner-list-routing.module";
import { OwnerListComponent } from "./owner-list.component";

@NgModule({
    declarations: [OwnerListComponent],
    imports: [
        CommonModule,
        OwnerListRoutingModule,
        HttpClientModule
    ],
    providers: [OwnerService]
})

export class OwnerListModule{}