import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { Level1Component } from './level1/level1.component';
import { Level1example2Component } from './level1example2/level1example2.component';
import { Level2Component } from './level2/level2.component';
import { Level2example2Component } from './level2example2/level2example2.component';
import { Level2example3Component } from './level2example3/level2example3.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IntroComponent,
    Level1Component,
    Level1example2Component,
    Level2Component,
    Level2example2Component,
    Level2example3Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"hibernate/caching/intro", component:IntroComponent},
      {path:"hibernate/caching/level1", component:Level1Component},
      {path:"hibernate/caching/level1example2", component:Level1example2Component},
      {path:"hibernate/caching/level2", component:Level2Component},
      {path:"hibernate/caching/level2example2", component:Level2example2Component},
      {path:"hibernate/caching/level2example3", component:Level2example3Component}
    ])
  ]
})
export class CachingModule { }
