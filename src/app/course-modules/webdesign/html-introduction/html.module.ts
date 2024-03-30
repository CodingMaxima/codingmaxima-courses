import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { HeadingsparagraphComponent } from './headingsparagraph/headingsparagraph.component';
import { ListComponent } from './list/list.component';
import { TablesComponent } from './tables/tables.component';
import { LinksComponent } from './links/links.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { BlocksComponent } from './blocks/blocks.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    IntroComponent,
    HeadingsparagraphComponent,
    ListComponent,
    TablesComponent,
    LinksComponent,
    MultimediaComponent,
    BlocksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'webdesign/html/intro', component:  IntroComponent},
      { path: 'webdesign/html/headingsparagraph', component: HeadingsparagraphComponent},
      { path: 'webdesign/html/list', component:  ListComponent},
      { path: 'webdesign/html/links', component: LinksComponent},
      { path: 'webdesign/html/tables', component:  TablesComponent},
      { path: 'webdesign/html/multimedia', component: MultimediaComponent},
      { path: 'webdesign/html/blocks', component: BlocksComponent},

    ])
  ]
})
export class HtmlModule { }
