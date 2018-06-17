import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/model/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [];

  constructor(
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.stateService.articlesSub.subscribe((data) => {
      this.articles = data;
      this.stateService.setSelectedArticle(this.articles[0].MarkdownLink);
    });
    this.stateService.getArticles();
  }

  onArticleSelect(article: any) {
    this.stateService.setSelectedArticle(article.MarkdownLink);
    this.router.navigate(['/article']);
  }
}
