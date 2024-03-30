import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeywordsComponent } from './keywords/keywords.component';
import { AccessSpecifiersComponent } from './access-specifiers/access-specifiers.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';


@NgModule({
  declarations: [
    KeywordsComponent,
    AccessSpecifiersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'core-java/others/keywords', component: KeywordsComponent },
      { path: 'core-java/others/access-specifiers', component: AccessSpecifiersComponent },
    ])
  ]
})
export class OthersModule { }
