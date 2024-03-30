import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { JestEnjymeComponent } from './jest-enjyme/jest-enjyme.component';
import { TestingLibraryComponent } from './testing-library/testing-library.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    JestEnjymeComponent,
    TestingLibraryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'react/testcases/introduction', component: IntroductionComponent },
      { path: 'react/testcases/jest-enjyme', component: JestEnjymeComponent },
      { path: 'react/testcases/testing-library', component:TestingLibraryComponent  }
   
    ])
  ]
})
export class TestcasesModule { }
