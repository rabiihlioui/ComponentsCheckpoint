import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnChanges {

  @Input() id: number

  pers = new Person(0,'','',0,0,'','../../assets/images/developer.png','../../assets/images/coverDev.png')

  cover: string

  pers1 = new Person(1,'Rabii','Hlioui',60,15786937,'Software Engineer','../../assets/images/rabiiHlioui.png','../../assets/images/coverRabii.png')
  pers2 = new Person(2,'Lionel','Messi',120,94557937,'Footballer','../../assets/images/lionelMessi.png','../../assets/images/coverLionel.png')
  pers3 = new Person(3,'Emna','Mejri',30,63339411,'Secretary','../../assets/images/imenMejri.png','../../assets/images/coverImen.png')

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
