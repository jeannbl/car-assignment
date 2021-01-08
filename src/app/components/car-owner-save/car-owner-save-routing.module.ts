import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarOwnerSaveComponent } from "./car-owner-save.component";

const routes: Routes = [
    {
        path: '',
        component: CarOwnerSaveComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CarOwnerSaveRoutingModule{}