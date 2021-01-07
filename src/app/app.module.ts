import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { FormsModule } from '@angular/forms';
import { CarStatusSaveComponent } from './components/car-status-save/car-status-save.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    CarStatusSaveComponent,
    /*CarListComponent,
    CarDetailComponent,
    OwnerListComponent,
    OwnerAddComponent,
    CarStatusListComponent,
    CarStatusAddComponent,
    CarOwnerListComponent,
    CarOwnerAddComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
