import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Article } from "src/app/model/article.model";

@Injectable()
export class StateService {
    constructor(private httpClient: HttpClient) {
        console.log("ding dong")
      
    }

    selectedArticle: string;
    selectedArticleSub: Subject<string> = new Subject<string>();

    articlesSub: Subject<Article[]> = new Subject<Article[]>();

    articles: Article[] = [
        {
            ArticleId: 5,
            Title: "Implementing Authentication for Golang Gin API, using Auth0",
            Description: "Coming soon...",
            ArticleDate: "2018-08-20",
            Tags: ["golang", "auth0"],
            Image: "/assets/auth0.png",
            MarkdownLink: "https://raw.githubusercontent.com/Pungyeon/vim-setup/master/README.md",
            ViewCount: 0
        },
        { 
            ArticleId: 4,
            Title: "Using NGINX as an API Gateway for Securing Microservices", 
            Description: "How to secure your microservices with authentication, load balancing and encryption using NGINX as an API Gateway",
            ArticleDate: "2018-08-20",
            Tags: ["nginx", "api gateway"],
            Image: "https://cdn-1.wp.nginx.com/wp-content/uploads/2015/04/NGINX_logo_rgb-01.png",
            MarkdownLink: "https://raw.githubusercontent.com/Pungyeon/docker-nginx-example/master/README.md",
            ViewCount: 0
        },
        { 
            ArticleId: 3,
            Title: "Introduction to RabbitMQ using Golang and Docker",
            Description: "Brief introduciton to using RabbitMQ with Golang", 
            ArticleDate: "2018-08-20",
            Tags: ["docker", "rabbitmq"],
            Image: "https://sciencelogic.com/wp-content/uploads/2018/01/logo-rabbitmq.png",
            MarkdownLink: "https://raw.githubusercontent.com/Pungyeon/go-rabbitmq-example/master/README.md",
            ViewCount: 0
        },
        {
            ArticleId: 2,
            Title: "Using Traefik as a Load Balancer for Docker Compose",
            Description: "How to secure your microservices with authentication, load balancing and encryption using NGINX as an API Gateway",
            ArticleDate: "2018-08-20",
            Tags: ["traefik", "docker"],
            Image: "https://d33wubrfki0l68.cloudfront.net/e29410f43273a18d40e1bd6e41641f5afdfc8057/eb7ca/traefik.logo.png",
            MarkdownLink: "https://raw.githubusercontent.com/Pungyeon/docker-traefik-example/master/README.md",
            ViewCount: 0
        },
        {
            ArticleId: 1,
            Title: "How to Containerise your Nodejs Application",
            Description: "Short introduction to Dockerising Nodejs application",
            ArticleDate: "2018-08-20",
            Tags: ["docker", "nodejs"],
            Image: "https://www.fullstackpython.com/img/logos/docker-wide.png",
            MarkdownLink: "https://raw.githubusercontent.com/Pungyeon/docker-example/master/README.md",
            ViewCount: 0
        } 
    ]

    setSelectedArticle(article: Article) {
        this.httpClient.get(article.MarkdownLink, { responseType: 'text'}).subscribe((data) => {
            this.selectedArticle = data;
            this.selectedArticleSub.next(data);
        }, (err: HttpErrorResponse) => {
            console.log("error on request: " + err.message);
        });
    }

    increasetViewCount(article: Article) {
        // increase view count
        this.httpClient.post(
            "https://yz9h0wk58l.execute-api.us-east-1.amazonaws.com/production/hello",
            article).subscribe((data) => {
                console.log("incremeneted view coudn for: " + article.ArticleId);
                console.log("article name: " + article.Title);
        }, (err: HttpErrorResponse) => {
            console.log("error on request: " + err.message);
        }) ;
    }

    getSelectedArticle() {
        return this.selectedArticle;
    }

    getArticles() {
        this.httpClient.get("https://yz9h0wk58l.execute-api.us-east-1.amazonaws.com/production/hello").subscribe((data: any) => {
            this.articlesSub.next(data.body.Items);
        }, (err: HttpErrorResponse) => {
            console.log("error on request: " + err.message);
        });  
        /* // http call goes here
        const thisPretendsToBeAnHTTPCall = this.articles;
        this.articlesSub.next(thisPretendsToBeAnHTTPCall); */
    }


}