import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiktatorComponent } from './diktator/diktator.component'

const routes: Routes = [
  { path: '', component: DiktatorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
