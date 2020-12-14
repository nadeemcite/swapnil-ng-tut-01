import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

//normal routing
const routes: Routes = [
  { path: '', component: C1Component },
  { path: 'a', component: C2Component },
  {
    path: 'm1',
    loadChildren: () => import('./m1/m1.module').then((m) => m.M1Module),
  },
  {
    path: 'm2',
    loadChildren: () => import('./m2/m2.module').then((m) => m.M2Module),
  },
];
//100 components

// Lazy routing

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
