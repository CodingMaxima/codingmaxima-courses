import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetminimumComponent } from './getminimum/getminimum.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { SpirallevelorderComponent } from './spirallevelorder/spirallevelorder.component';
import { MaxrectangleComponent } from './maxrectangle/maxrectangle.component';
import { NextgreaterComponent } from './nextgreater/nextgreater.component';
import { ParenthesismacherComponent } from './parenthesismacher/parenthesismacher.component';
import { QueuetwostackComponent } from './queuetwostack/queuetwostack.component';
import { SortastackComponent } from './sortastack/sortastack.component';
import { SpecialstackComponent } from './specialstack/specialstack.component';
import { StackusingqueueComponent } from './stackusingqueue/stackusingqueue.component';
import { StockspanComponent } from './stockspan/stockspan.component';
import { CelebratyproComponent } from './celebratypro/celebratypro.component';



@NgModule({
  declarations: [
    GetminimumComponent,
    SpirallevelorderComponent,
    MaxrectangleComponent,
    NextgreaterComponent,
    ParenthesismacherComponent,
    QueuetwostackComponent,
    SortastackComponent,
    SpecialstackComponent,
    StackusingqueueComponent,
    StockspanComponent,
    CelebratyproComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"ds-algo/stacks/getminimum", component:GetminimumComponent},
      {path:"ds-algo/stacks/spirallevelorder", component:SpirallevelorderComponent},
      {path:"ds-algo/stacks/maxrectangle", component:MaxrectangleComponent},
      {path:"ds-algo/stacks/nextgreater", component:NextgreaterComponent},
      {path:"ds-algo/stacks/parenthesismacher", component:ParenthesismacherComponent},
      {path:"ds-algo/stacks/queuetwostack", component:QueuetwostackComponent},
      {path:"ds-algo/stacks/sortastack", component:SortastackComponent},
      {path:"ds-algo/stacks/specialstack", component:SpecialstackComponent},
      {path:"ds-algo/stacks/stackusingqueue", component:StackusingqueueComponent},
      {path:"ds-algo/stacks/stockspan", component:StockspanComponent},
      {path:"ds-algo/stacks/celebratypro", component:CelebratyproComponent},
      
     
      
    ])
  ]
})
export class StacksModule { }
