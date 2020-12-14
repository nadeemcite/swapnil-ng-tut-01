import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { M2C1Component } from './m2c1/m2c1.component';

const routes: Routes = [{ path: '', component: M2C1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [M2C1Component],
  providers: [],
})
export class M2Module {}
