import { Component, OnInit } from '@angular/core';
import { ISquare } from '../iSquare';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit, ISquare {

  constructor() { }
  area: number;
  perimiter: number;
  sideA: number;
  calculateArea() {
    this.area = this.sideA * 2;
  }
  calculatePerimiter() {
    this.perimiter = this.sideA * 4;
  }

  ngOnInit(): void {
  }


}
