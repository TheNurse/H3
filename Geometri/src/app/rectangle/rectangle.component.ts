import { Component, OnInit } from '@angular/core';
import { ISquare } from '../iSquare';

interface IRectangle extends ISquare {
  sideB: number;
}

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss']
})
export class RectangleComponent implements OnInit, IRectangle {

  constructor() { }
  area: number;
  perimiter: number;
  sideB: number;
  sideA: number;
  
  calculateArea() {
    this.area = this.sideA * this.sideB;
  }
  calculatePerimiter() {
    this.perimiter = 2 * (this.sideB + this.sideA);
  }

  ngOnInit(): void {
  }

}
