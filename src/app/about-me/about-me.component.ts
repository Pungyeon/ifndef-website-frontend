import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  showExperience = false;
  panelOpenState: boolean = false;
  experience = [
    {
      Company: "Credocom A/S",
      Title: "Solutions Architect",
      Description: "Solutions Architect at Credocom A/S Specializing in data analysis and development of automation tools for data analysis, with focus on analysing network and security solutions.",
    },
    {
      Company: "Credocom A/S",
      Title: "Consulant",
      Description: "Working as a Consultant at Credocom A/S, specializing in cloud technology, network analysis and development of software for deployment and analysis.",
    },
    {
      Company: "Brdr. Hartmann",
      Title: "Cloud Technician",
      Description: "As Cloud Technician, I have the technical responsibilities for Office 365 and Azure in Brdr. Hartmann. I also assist front -and back-end support for our 500+ IT users.",
    },
    {
      Company: "Brdr. Hartmann",
      Title: "Student",
      Description: "Currently responsible for Office 365 Research and Development, Assistent for front-end & back-end support.",
    }
  ]

  constructor() { }

  ngOnInit() {

  }

  onShowExperience() {
    this.showExperience = true;
  }

}
