import { ArticlesComponent } from "src/app/articles/articles.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { FrontPageComponent } from "./front-page/front-page.component";
import { ArticleComponent } from "./article/article.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: FrontPageComponent },
    { path: 'about', component: AboutMeComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'article', component: ArticleComponent}
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }
  