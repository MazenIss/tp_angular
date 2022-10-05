import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  color='red';

  constructor() { }

  ngOnInit(): void {
  }
  changecolor(color:string){
    this.color=color;
  }
  catchColor(favColor:string){
    this.color=favColor;
  }


}
