import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {
  makes = ['BMW', 'GTR', 'Poshe', 'Lambogini', 'Benz'];
  title:string;

  onNotified(message:string){
    this.title = message;
  }

  constructor() {}

  ngOnInit(): void {}
}
