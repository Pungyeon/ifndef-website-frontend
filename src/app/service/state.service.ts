import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Article } from "src/app/model/article.model";

@Injectable()
export class StateService {
    constructor(private httpClient: HttpClient) {}

    selectedArticle = "Error - no article selected...";
    selectedArticleSub: Subject<string> = new Subject<string>();

    articlesSub: Subject<Article[]> = new Subject<Article[]>();

    articles: Article[] = []

    retrieveSelectedArticle(article: Article) {
        return this.httpClient.get(article.markdown_link, { responseType: 'text'})
    }

    setSelectedArticle(data) {
        this.selectedArticle = data;
        this.selectedArticleSub.next(data);
    }

    increasetViewCount(article: Article) {
        // increase view count
        this.httpClient.post(
            "https://yz9h0wk58l.execute-api.us-east-1.amazonaws.com/production/hello",
            article).subscribe((data) => {
                console.log("incremeneted view coudn for: " + article.article_id);
                console.log("article name: " + article.title);
        }, (err: HttpErrorResponse) => {
            console.log("error on request: " + err.message);
        });
    }

    getSelectedArticle() {
        return this.selectedArticle;
    }

    getArticles() {
        this.httpClient.get("http://localhost:8080/articles").subscribe((data: any) => {
            this.articlesSub.next(data);
        }, (err: HttpErrorResponse) => {
            console.log("error on request: " + err.message);
        });
    }


}