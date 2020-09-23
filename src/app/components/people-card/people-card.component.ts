import { Component, Input, OnInit } from '@angular/core';
import { People } from 'src/app/model/people';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css']
})
export class PeopleCardComponent implements OnInit {

  // receive the person data from the app component  
  @Input() person:People;

  constructor() { }

  ngOnInit(): void {
  }
  

}
