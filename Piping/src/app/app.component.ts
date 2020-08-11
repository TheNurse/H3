import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Piping';
  inputText: string;

  setInputText(value: string){
    this.inputText = value;
  }
}
