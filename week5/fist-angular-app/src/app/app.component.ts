import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
emails = [
  {email: "email1@email.com", importance: true, subject : "Puppies", content: "Labs are the best", },
  {email: "email2@aol.com", importance: true, subject : "Food", content: "Mashed potatos are good",},
  {email: "email3@gmail.com", importance: false, subject : "Cars", content: "Ford was good",},
  {email: "email4@yahoo.com", importance: false, subject : "Real Estate", content: "The housing market is booming!",},
  {email: "email5@sbcglobal.net", importance: true, subject : "Conservation", content: "save the plantet",},
  {email: "email6@comcast.net", importance: false, subject : "Superheros", content: "Thors is the best",}
]
}
