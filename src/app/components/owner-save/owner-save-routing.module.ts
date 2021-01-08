import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OwnerSaveComponent } from "./owner-save.component";

const routes: Routes = [
    {
        path: '',
        component: OwnerSaveComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OwnerSaveRoutingModule{}