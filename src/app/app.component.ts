import { Component, OnInit, ViewChild } from '@angular/core';
import { VocabularyService } from './services/vocabulary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  started = false;
  gameOver = false;
  word;
  history = [];
  roundDuration = 15;

  @ViewChild('frm') form;
  gameTitle = 'Alias game';

  constructor(private vocabulary: VocabularyService) {}

  async ngOnInit() {
    this.word = await this.vocabulary.getNextWord();
    console.log(this.form);
  }

  async onWordPlayed(word) {
    this.history.push(word);
    this.word = await this.vocabulary.getNextWord();
  }

  onWordReplayed(word) {
    this.history.find(_ => _.word === word.word).guessed = word.guessed;
  }

  getScore() {
    return Math.max(this.history.reduce((acc, word) => {
      return word.guessed ? ++acc : --acc;
    }, 0), 0);
  }
}
