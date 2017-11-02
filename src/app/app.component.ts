import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  started = false;
  gameOver = false;

  onTimerFinish() {
    this.gameOver = true;
  }
}
