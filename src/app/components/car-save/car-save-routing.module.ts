import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarSaveComponent } from "./car-save.component";

const routes: Routes = [
    {
        path: '',
        component: CarSaveComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CarSaveRoutingModule{}