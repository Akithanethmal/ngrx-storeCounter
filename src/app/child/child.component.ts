import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() run: string;
 @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.notify.emit(this.run + 'was click');
  }

  constructor() {}

  ngOnInit(): void {}
}
