import { Component, OnInit } from '@angular/core';
import { Cv } from 'src/app/models/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  currentItem!:Cv;
  items:Cv[]=[
    {
      id:'1',
      name:'issaoui',
      firstname:'mazen',
      age: 21,
      cin:'11632112',
      job:'student',
      path:'assets/images/mazen.jpg'
    },
    {
      id:'2',
      name:'sdiri',
      firstname:'hamza',
      age: 21,
      cin:'10632115',
      job:'student',
      path:'assets/images/hamza.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  catchItem(item:Cv){
   this.currentItem=item;
  }

}
