import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  details = [ 1, 2, 3,4 ];

  articles = [
    { Title: "How to Containerise your Nodejs Application", Description: "Short introduction to Dockerising Nodejs application",
      Likes: 2, Date: "2018-08-20",
      Tags: ["docker", "nodejs"],
      Image: "https://www.fullstackpython.com/img/logos/docker-wide.png",
      MarkdownLink: "https://raw.githubusercontent.com/Pungyeon/docker-nginx-example/master/README.md"
    },
    { Title: "Introduction to RabbitMQ using Golang and Docker", Description: "Brief introduciton to using RabbitMQ with Golang", 
      Likes: 2, Date: "2018-08-20",
      Tags: ["docker", "rabbitmq"],
      Image: "https://sciencelogic.com/wp-content/uploads/2018/01/logo-rabbitmq.png",
      MarkdownLink: "https://raw.githubusercontent.com/Pungyeon/go-rabbitmq-example/master/README.md"
    },
    { Title: "Securing Microservices using an API Gateway", Description: "How to secure your microservices with authentication, load balancing and encryption using NGINX as an API Gateway",
      Likes: 2, Date: "2018-08-20",
      Tags: ["nginx", "api gateway"],
      Image: "https://cdn-1.wp.nginx.com/wp-content/uploads/2015/04/NGINX_logo_rgb-01.png",
      MarkdownLink: "https://raw.githubusercontent.com/Pungyeon/docker-example/master/README.md"
    },
    { Title: "Using Traefik as a Load Balancer for Docker Compose", Description: "How to secure your microservices with authentication, load balancing and encryption using NGINX as an API Gateway",
      Likes: 4, Date: "2018-08-20",
      Tags: ["traefik", "docker"],
      Image: "https://d33wubrfki0l68.cloudfront.net/e29410f43273a18d40e1bd6e41641f5afdfc8057/eb7ca/traefik.logo.png",
      MarkdownLink: "https://raw.githubusercontent.com/Pungyeon/docker-traefik-example/master/README.md"
    },
      
  ]

  onArticleSelect(article: any) {
    console.log("You selected: " + article.Title);
  }
}
