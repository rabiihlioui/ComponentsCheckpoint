import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnChanges {

  @Input() id: number

  pers: Person

  pers1 = new Person(1,'Rabii','Hlioui',60,15786937,'Software Engineer')
  pers2 = new Person(2,'Lionel','Messi',120,94557937,'Footballer')
  pers3 = new Person(3,'Emna','Mejri',30,63339411,'Secretary')

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.id == 1)
    this.pers = this.pers1
    else if (this.id == 2)
    this.pers = this.pers2
    else if (this.id == 3)
    this.pers = this.pers3
  }

}
