import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { BackgroundDirective } from './directives/background.directive';
import { PowPipe } from './pow.pipe';
import { CarFilterPipe } from './car-filter.pipe';
import { CarsService } from './cars.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AddCarComponent,
    BackgroundDirective,
    PowPipe,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
