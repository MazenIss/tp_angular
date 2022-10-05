import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/models/cv.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
@Output() emitItemParent=new EventEmitter<Cv>();
@Input() items!:Cv[];
  constructor() { }

  ngOnInit(): void {
  }
  catchItem(item:Cv){
    this.emitItemParent.emit(item);
   }

}
