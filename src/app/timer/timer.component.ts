import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() interval = 0;
  @Output() finish = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  start() {
    const handle = setInterval(() => {
      this.interval --;
      if (this.interval <= 0) {
        clearInterval(handle);
        this.finish.emit();
      }
    }, 1000);
  }
}
