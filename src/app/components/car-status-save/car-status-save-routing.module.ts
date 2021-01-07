import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarStatusSaveComponent } from "./car-status-save.component";

const routes: Routes = [
    {
        path: '',
        component: CarStatusSaveComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CarStatusSaveRoutingModule{}