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
      Projects: [
        "Technical lead on PinPoint solution, enabling network engineers to easily retrieve and analyse packet captures from network recorders. The solution delivered using a cloud-native approach, to ensure scalability and agility in development.",
        "Lead Developer on analysis tool for 802.1x deployment for large international organisation, to provide network engineers with data on client information and simplified management of clients. The tool assisting in a smooth deployment for over 40.000 clients.",
        "Rewrite of legacy system responsible for invoicing of hosting customer, with focus on error handling and improving security implementation. Establishing confidence in the reliability of the system."
      ]
    },
    {
      Company: "Credocom A/S",
      Title: "Consulant",
      Description: "Working as a Consultant at Credocom A/S, specializing in cloud technology, network analysis and development of software for deployment and analysis.",
      Projects: [
        "Lead Developer of monitoring and reporting solution for Riverbed Steelhead WAN optimisation appliances, to ensure performance stability in the event of failures or unexpected events.",
        "Analysis of network traffic for a larger government organisation, troubleshooting slow network connections of the existing VDI solution. The analysis discovered several bottlenecks and protocol instabilities and actions taken, based on analysis, resulted in a decrease of response times by 60% on average."

      ]
    },
    {
      Company: "Brdr. Hartmann",
      Title: "Cloud Technician",
      Description: "As Cloud Technician, I have the technical responsibilities for Office 365 and Azure in Brdr. Hartmann. I also assist front -and back-end support for our 500+ IT users.",
      Projects: [
        "Led a cloud infrastructure migration that successfully migrated 1500 users to Office 365 in 4 weeks. The project was successful due to rigorous planning and development of migration tools with Powershell."
      ]
    },
    {
      Company: "Brdr. Hartmann",
      Title: "Student",
      Description: "Currently responsible for Office 365 Research and Development, Assistent for front-end & back-end support.",
      Projects: [
        "Developer for logistic forecast reporting project. Lasse automated many manual reporting and presentation processes that enabled more frequent and accurate forecasts."
      ]
    }
  ]

  constructor() { }

  ngOnInit() {

  }

  onShowExperience() {
    this.showExperience = true;
  }

}
