import {Word} from '../interfaces/word';
export class Storage {

  chStorage = chrome.storage.sync;
  words: Array<Word> = [];

  constructor() {
    console.log('create chrome storage sync');
    if (!this.chStorage)
      console.log('chrome undefined');

    this.chStorage.get(null, (words: Word[]) => {
      console.log('Words', words);
      this.words = words;
    });
  }

  public list() {
    console.log('storage list');
    return this.words;
  }

}
