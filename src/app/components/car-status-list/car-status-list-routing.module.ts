import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarStatusListComponent } from "./car-status-list.component";

const routes: Routes = [
    {
        path: '',
        component: CarStatusListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CarStatusListRoutingModule{}