import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {

  itemId: number

  @Output() chosenItem = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  getItemId(){
    this.itemId = 1
    this.chosenItem.emit(
      this.itemId
    )
  }

}
