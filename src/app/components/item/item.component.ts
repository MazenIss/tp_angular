import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/models/cv.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() item!:Cv;
@Output() emitItem=new EventEmitter<Cv>();
  constructor() { }

  ngOnInit(): void {
  }
  onItem(item:Cv){
    this.emitItem.emit(item);
    }
}
