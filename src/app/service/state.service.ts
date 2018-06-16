import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class StateService {
    constructor(private httpClient: HttpClient) {}

    selectedArticle: string;
    selectedArticleSub: Subject<string> = new Subject<string>();

    setSelectedArticle(mdLink: string) {
        console.log("Selected: " + mdLink);
        this.httpClient.get(mdLink, { responseType: 'text'}).subscribe((data) => {
            this.selectedArticle = data;
            this.selectedArticleSub.next(data);
        });
    }

    getSelectedArticle() {
        return this.selectedArticle;
    }


}