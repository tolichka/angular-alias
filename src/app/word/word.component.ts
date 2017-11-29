import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @Input() guessed;
  @Input() word;
  @Output() played = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
