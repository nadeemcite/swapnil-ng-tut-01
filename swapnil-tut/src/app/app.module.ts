import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { AppRoutingModule } from './app-routing.module';
import { M1Module } from './m1/m1.module';
import { M2Module } from './m2/m2.module';

@NgModule({
  declarations: [AppComponent, C1Component, C2Component],
  imports: [BrowserModule, AppRoutingModule, M1Module, M2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
