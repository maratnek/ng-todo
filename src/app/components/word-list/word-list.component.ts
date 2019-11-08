import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {Word} from '../../interfaces/word';
import {StorageService} from '../../services/storage.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: "app-word-list",
  templateUrl: "./word-list.component.html",
  styleUrls: ["./word-list.component.scss"],
})
export class WordListComponent implements OnInit {
  words: Array<Word> = [];

  constructor(storage: StorageService) {
    this.words = storage.getAllList();
  }

  ngOnInit() {}
}
