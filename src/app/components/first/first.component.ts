import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  color='white';

  constructor() { }

  ngOnInit(): void {
  }
  changecolor(color:string){
    this.color=color;
  }

}
