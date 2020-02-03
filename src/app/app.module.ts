import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {AtomSpinnerModule,FlowerSpinnerModule, HollowDotsSpinnerModule, IntersectingCirclesSpinnerModule, OrbitSpinnerModule, RadarSpinnerModule, ScalingSquaresSpinnerModule, HalfCircleSpinnerModule,TrinityRingsSpinnerModule, FulfillingSquareSpinnerModule,SemipolarSpinnerModule, SelfBuildingSquareSpinnerModule , SwappingSquaresSpinnerModule, FulfillingBouncingCircleSpinnerModule,FingerprintSpinnerModule, SpringSpinnerModule,LoopingRhumbusesSpinnerModule} from 'angular-epic-spinners'

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AtomSpinnerModule, FlowerSpinnerModule, HollowDotsSpinnerModule, IntersectingCirclesSpinnerModule, OrbitSpinnerModule, RadarSpinnerModule, ScalingSquaresSpinnerModule, HalfCircleSpinnerModule, TrinityRingsSpinnerModule, FulfillingSquareSpinnerModule,SemipolarSpinnerModule, SelfBuildingSquareSpinnerModule, SwappingSquaresSpinnerModule, FulfillingBouncingCircleSpinnerModule ,FingerprintSpinnerModule, SpringSpinnerModule, LoopingRhumbusesSpinnerModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
