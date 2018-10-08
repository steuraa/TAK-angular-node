import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  createBoard(size: number = 5): BoardService {
    let tiles = [];
    for(let i = 0; i < size; i++) {
      tiles[i] = [];
      for (let y = 0; y < size; y++) {
        tiles[i][y] = {used: false, player: undefined, stones: [], }
      }
    }
    return this;
  }
}
