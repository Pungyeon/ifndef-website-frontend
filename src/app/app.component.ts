import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the ifndef_lja website! *WORK IN PROGRESS*';

  articles = [
    { Title: "Introduction to Docker", Description: "Short introduction to Dockerising Nodejs application",
      Likes: 2, Date: "2018-08-20",
      Tags: ["docker", "nodejs", "javascript", "beginner"]},
    { Title: "Introduction to RabbitMQ", Description: "Brief introduciton to using RabbitMQ with Golang", 
      Likes: 2, Date: "2018-08-20",
      Tags: ["docker", "rabbitmq", "golang", "intermediate"]},
    { Title: "Securing Microservices using an API Gateway", Description: "How to secure your microservices with authentication, load balancing and encryption using NGINX as an API Gateway",
      Likes: 2, Date: "2018-08-20",
      Tags: ["docker", "golang", "nginx", "api gateway", "microservices", "load balancer"]}
  ]
}
