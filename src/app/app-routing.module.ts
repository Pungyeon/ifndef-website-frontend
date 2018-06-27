import { ArticlesComponent } from "src/app/articles/articles.component";
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AboutSiteComponent } from "src/app/about-site/about-site.component";
import { ErrorComponent } from "./error/error.component";
import { AboutMeModule } from "./about-me/about-me.module";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: 'src/app/front-page/front-page.module#FrontPageModule'},
    { path: 'about', loadChildren: 'src/app/about-me/about-me.module#AboutMeModule'},
    { path: 'about-site', component: AboutSiteComponent },
    { path: 'articles', loadChildren: 'src/app/articles/articles.module#ArticlesModule' },
    { path: 'article', loadChildren: 'src/app/article/article.module#ArticleModule'},
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: 'error'}
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }
  