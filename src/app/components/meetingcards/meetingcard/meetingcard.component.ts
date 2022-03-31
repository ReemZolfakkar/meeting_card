import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetingcard',
  templateUrl: './meetingcard.component.html',
  styleUrls: ['./meetingcard.component.css']
})
export class MeetingcardComponent implements OnInit {

  constructor() { }
  Date:any;
  Statue:any;
  users:any[]=[
      {id:1},
      {id:2},
  ]
  ngOnInit(): void {
    this.Date="Monday Feb16, 11:00 AM - 2:00 PM (2 hrs)"
    this.Statue="Scheduled"
  }

}
