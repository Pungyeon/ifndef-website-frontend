import { Component, OnInit, Testability } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'prismjs/prism';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-nginx';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public content = "## Nothing yet";

  constructor(
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.stateService.selectedArticleSub.subscribe((data) => {
      this.content = data;
    });
  }
}
