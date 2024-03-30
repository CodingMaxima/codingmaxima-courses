import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ScrapingIntroComponent } from './scraping-intro/scraping-intro.component';
import { WebscrapingExamplesComponent } from './webscraping-examples/webscraping-examples.component';

@NgModule({
  declarations: [
    ScrapingIntroComponent,
    WebscrapingExamplesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'python/web-scraping/scraping-intro', component: ScrapingIntroComponent },
      { path: 'python/web-scraping/webscraping-examples', component: WebscrapingExamplesComponent },
   
    ])
  ]
})
export class WebScrapingModule { }
