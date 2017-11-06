import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  started = false;
  gameOver = false;

  word;
  history = [];

  constructor(private http: Http) {
    this.http
      .get('http://alias.moydomen.com/words.json')
      .subscribe(resp => {
        this.vocabulary = resp.json();
        this.word = this.getNextWord();
      })
    ;
  }

  private vocabulary;

  private wordId = 0;

  onWordPlayed(word) {
    this.history.push(word);
    this.word = this.getNextWord();
  }

  onWordReplayed(word) {
    this.history.find(_ => _.word === word.word).guessed = word.guessed;
  }

  getNextWord() {
    return this.vocabulary[this.wordId++] || '';
  }

  // todo: make sure score >= 0
  getScore() {
    console.log('calc score');
    return this.history.reduce((acc, word) => {
      return word.guessed ? ++acc : --acc;
    }, 0);
  }
}
