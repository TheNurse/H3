import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SquareComponent } from './square/square.component';
import { RectangleComponent } from './rectangle/rectangle.component';

const routes: Routes = [
  { path: '', component: SquareComponent },
  { path: 'rectangle', component: RectangleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
