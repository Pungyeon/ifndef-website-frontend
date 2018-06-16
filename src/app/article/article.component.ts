import { Component, OnInit, Testability } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public content = "";

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("https://raw.githubusercontent.com/Pungyeon/go-rabbitmq-example/master/README.md", {responseType: 'text'}).subscribe((data: string) => {
      this.content = data;
    });
  }

}
