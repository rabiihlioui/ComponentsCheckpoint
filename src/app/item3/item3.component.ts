import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.css']
})
export class Item3Component implements OnInit {

  itemId: number

  @Output() chosenItem = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  getItemId(){
    this.itemId = 3
    this.chosenItem.emit(
      this.itemId
    )
  }

}
