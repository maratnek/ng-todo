import { Injectable } from '@angular/core';
import {Word} from '../interfaces/word';

import {Storage} from '../storage/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storage: Storage;

  constructor() { }

  addWord(word: Word) {
    // save word in storage
    console.log(this.storage);
  }

  getAllList() {
    let count = 10;
    return [
      { name: "first", repeat_mention: 1, need_repeat: count, date: new Date() },
      { name: "second", repeat_mention: 3, need_repeat: count, date: new Date() }
    ];
  }
}
