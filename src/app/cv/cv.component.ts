import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  chosenItem: number

  constructor() { }

  ngOnInit() {
  }

  selectItem(id){
    this.chosenItem = id
  }

}
