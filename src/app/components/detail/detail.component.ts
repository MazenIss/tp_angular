import { Component, Input, OnInit } from '@angular/core';
import { Cv } from 'src/app/models/cv.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() item!:Cv;

  constructor() { }

  ngOnInit(): void {
  }

}
