import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeetingcardComponent } from './components/meetingcards/meetingcard/meetingcard.component';
import { UsersComponent } from './components/meetingcards/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingcardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
