import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class VocabularyService {

  private vocabulary;
  private wordId = 0;

  private httpPromise;

  constructor(private http: Http) {
    this.httpPromise = this.http
      .get('http://alias.moydomen.com/words.json')
      .toPromise()
      .then(resp => {
        this.vocabulary = resp.json();
      })
    ;
  }

  async getNextWord() {
    await this.httpPromise;
    this.wordId = Math.floor(Math.random() * this.vocabulary.length);
    return this.vocabulary[this.wordId++] || '';
  }
}
