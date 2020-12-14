import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { M1C1Component } from './m1c1/m1c1.component';
import { M1C2Component } from './m1c2/m1c2.component';

const routes: Routes = [
  { path: '', component: M1C1Component },
  { path: 'c', component: M1C2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [M1C1Component, M1C2Component],
  providers: [],
})
export class M1Module {}
