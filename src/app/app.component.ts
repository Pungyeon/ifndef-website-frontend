import { Component } from '@angular/core';

/*
 * TODO: Make the 'about me' section a side panel that can be hidden
 * TODO: Create a search function. Just implement it in pure javascript, there is no need to implement anything more exciting, for now.
 * TODO: Get data from MongoDB rather than from static numbers
 * TODO: Fill descriptions of work 
 * TODO: Add contact details
 * TODO: Add links of articles
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the ifndef_lja website! *WORK IN PROGRESS*';
  showExperience = false;

}
