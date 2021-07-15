import {Component, DoCheck} from '@angular/core';
import {gameMemoryWords} from "../../../../storage";

interface wordCart {
  key: string,
  wordEng: string,
  wordRus: string
}

@Component({
  selector: 'app-game-memory',
  templateUrl: './game-memory.component.html',
  styleUrls: ['./game-memory.component.scss']
})
export class GameMemoryComponent implements DoCheck {
  cartListEng: wordCart[] = gameMemoryWords
  cartListRus: wordCart[] = gameMemoryWords.slice().sort(() => Math.random() - 0.5)
  activeEngCartKey: string = ''
  activeRusCartKey: string = ''
  passedListKeys: string[] = []
  message: string = ''

  ngDoCheck(): void {
    if (this.activeEngCartKey && this.activeRusCartKey) {
      if (this.activeRusCartKey === this.activeEngCartKey) {
        this.passedListKeys.push(this.activeRusCartKey)
        this.setMessage('nice')
      } else {
        this.setMessage('wrong')
      }
      this.clearKeys()
    }
  }

  onEngCartClick(cart: any) {
    this.activeEngCartKey = cart.key
  }

  onRusCartClick(cart: any) {
    this.activeRusCartKey = cart.key
  }

  clearKeys() {
    this.activeRusCartKey = ''
    this.activeEngCartKey = ''
  }

  setMessage(string: string) {
    this.message = string
    setTimeout(() => {
      this.message = ''
    }, 1000)
  }
}
