import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  chosenItemId: number

  @Output() chosenId = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  chosenItem(itemId){
    this.chosenItemId = itemId
    this.chosenId.emit(
      this.chosenItemId
    )
  }

}
