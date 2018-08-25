import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/model/article.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  loading = true;

  constructor(
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.stateService.articlesSub.subscribe((data) => {
      this.articles = data.sort((a, b): number => {
        return b.ArticleId - a.ArticleId;
      });
      this.stateService.setSelectedArticle(this.articles[0]);
      this.loading = false;
    });
    this.stateService.getArticles();
  }

  onArticleSelect(article: Article) {
    this.stateService.increasetViewCount(article);
    if (article.MarkdownLink.startsWith("https://raw.githubusercontent.com/Pungyeon") === false) {
      window.location.href = article.MarkdownLink;
      return;
    }
    this.stateService.retrieveSelectedArticle(article).subscribe((data) => {
      this.stateService.setSelectedArticle(data);
      this.router.navigate(['/article']);
    }, (err: HttpErrorResponse) => {
      ("error on request: " + err.message);
    });
  }

  onExternalArticleSelect(article: Article) {
    window.location.href = article.MarkdownLink;
  } 
}
