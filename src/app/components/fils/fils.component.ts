import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  favColor="green";
 @Input() ParentColor='';
 @Output() emitColor=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  send(){
    this.emitColor.emit(this.favColor);
  }

}
