import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarOwnerListComponent } from "./car-owner-list.component";

const routes: Routes = [
    {
        path: '',
        component: CarOwnerListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CarOwnerListRoutingModule{}