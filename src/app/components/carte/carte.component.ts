import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  name='issaoui';
  firstname='mazen';
  job='student';
  path='assets/images/mazen.jpg';

  constructor() { }

  ngOnInit(): void {
  }
  changeName(s:string){
    this.name=s;
  }
  changeFirstName(s:string){
    this.firstname=s;
  }
  changeJob(s:string){
    this.job=s;
  }
  changePath(s:string){
    this.path=s;
  }

}
