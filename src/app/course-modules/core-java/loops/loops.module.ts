import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { Loopquestion1Component } from './loopquestion1/loopquestion1.component';
import { Loopquestion2Component } from './loopquestion2/loopquestion2.component';
import { Loopquestion3Component } from './loopquestion3/loopquestion3.component';
import { Loopquestion4Component } from './loopquestion4/loopquestion4.component';
import { Loopquestion5Component } from './loopquestion5/loopquestion5.component';
import { Loopquestion6Component } from './loopquestion6/loopquestion6.component';
import { Loopquestion7Component } from './loopquestion7/loopquestion7.component';
import { Loopquestion8Component } from './loopquestion8/loopquestion8.component';
import { Loopquestion9Component } from './loopquestion9/loopquestion9.component';
import { Loopquestion10Component } from './loopquestion10/loopquestion10.component';



@NgModule({
  declarations: [
    Loopquestion1Component,
    Loopquestion2Component,
    Loopquestion3Component,
    Loopquestion4Component,
    Loopquestion5Component,
    Loopquestion6Component,
    Loopquestion7Component,
    Loopquestion8Component,
    Loopquestion9Component,
    Loopquestion10Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"core-java/loops/loopquestion1", component:Loopquestion1Component},
      {path:"core-java/loops/loopquestion2", component:Loopquestion2Component},
      {path:"core-java/loops/loopquestion3", component:Loopquestion3Component},
      {path:"core-java/loops/loopquestion4", component:Loopquestion4Component},
      {path:"core-java/loops/loopquestion5", component:Loopquestion5Component},
      {path:"core-java/loops/loopquestion6", component:Loopquestion6Component},
      {path:"core-java/loops/loopquestion7", component:Loopquestion7Component},
      {path:"core-java/loops/loopquestion8", component:Loopquestion8Component},
      {path:"core-java/loops/loopquestion9", component:Loopquestion9Component},
      {path:"core-java/loops/loopquestion10", component:Loopquestion10Component}
    ])
  ]
})
export class LoopsModule { }
