import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css']
})
export class Item2Component implements OnInit {

  itemId: number

  @Output() chosenItem = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  getItemId(){
    this.itemId = 2
    this.chosenItem.emit(
      this.itemId
    )
  }

}
