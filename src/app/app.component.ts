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
  panelOpenState: boolean = false;

  experience = [
    {
      Company: "Credocom A/S",
      Title: "Solutions Architect",
      Description: "Weow",
    },
    {
      Company: "Credocom A/S",
      Title: "Consulant",
      Description: "I did network shit",
    },
    {
      Company: "Brdr. Hartmann",
      Title: "Cloud Technician",
      Description: "I migrated cloud stuff",
    },
    {
      Company: "Brdr. Hartmann",
      Title: "Student",
      Description: "I coded some reports.",
    }
  ]

  articles = [
    { Title: "Introduction to Docker", Description: "Short introduction to Dockerising Nodejs application",
      Likes: 2, Date: "2018-08-20",
      Tags: ["docker", "nodejs", "javascript", "beginner"],
      Image: "https://www.fullstackpython.com/img/logos/docker-wide.png"
    },
    { Title: "Introduction to RabbitMQ", Description: "Brief introduciton to using RabbitMQ with Golang", 
      Likes: 2, Date: "2018-08-20",
      Tags: ["docker", "rabbitmq", "golang", "intermediate"],
      Image: "https://sciencelogic.com/wp-content/uploads/2018/01/logo-rabbitmq.png"
    },
    { Title: "Securing Microservices using an API Gateway", Description: "How to secure your microservices with authentication, load balancing and encryption using NGINX as an API Gateway",
      Likes: 2, Date: "2018-08-20",
      Tags: ["docker", "golang", "nginx", "api gateway", "microservices", "load balancer"],
      Image: "https://cdn-1.wp.nginx.com/wp-content/uploads/2015/04/NGINX_logo_rgb-01.png"},
      
  ]

  onShowExperience() {
    this.showExperience = true;
  }
}
