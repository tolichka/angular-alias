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
    return this.vocabulary[this.wordId++] || '';
  }

}
