import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletetreeComponent } from './completetree/completetree.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { FirstnonrepeatingcharComponent } from './firstnonrepeatingchar/firstnonrepeatingchar.component';
import { Iplmatch2Component } from './iplmatch2/iplmatch2.component';
import { KthlargestsumComponent } from './kthlargestsum/kthlargestsum.component';
import { MaximumdiamondComponent } from './maximumdiamond/maximumdiamond.component';
import { MaximumcostropeComponent } from './maximumcostrope/maximumcostrope.component';
import { PriorityqueueComponent } from './priorityqueue/priorityqueue.component';
import { PrintinsortedorderComponent } from './printinsortedorder/printinsortedorder.component';
import { QueuetostackComponent } from './queuetostack/queuetostack.component';
import { ReversequeueComponent } from './reversequeue/reversequeue.component';



@NgModule({
  declarations: [
    CompletetreeComponent,
    FirstnonrepeatingcharComponent,
    Iplmatch2Component,
    KthlargestsumComponent,
    MaximumdiamondComponent,
    MaximumcostropeComponent,
    PriorityqueueComponent,
    PrintinsortedorderComponent,
    QueuetostackComponent,
    ReversequeueComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"ds-algo/queue/completetree/completetree", component:CompletetreeComponent},
      {path:"ds-algo/queue/completetree/firstnonrepeatingchar", component:FirstnonrepeatingcharComponent},
      {path:"ds-algo/queue/completetree/iplmatch2", component:Iplmatch2Component},
      {path:"ds-algo/queue/completetree/iplmatch2", component:Iplmatch2Component},
      {path:"ds-algo/queue/completetree/kthlargestsum", component:KthlargestsumComponent},
      {path:"ds-algo/queue/completetree/maximumdiamond", component:MaximumdiamondComponent},
      {path:"ds-algo/queue/completetree/maximumcostrope", component:MaximumcostropeComponent},
      {path:"ds-algo/queue/completetree/priorityqueue", component:PriorityqueueComponent},
      {path:"ds-algo/queue/completetree/printinsortedorder", component:PrintinsortedorderComponent},
      {path:"ds-algo/queue/completetree/queuetostack", component:QueuetostackComponent},
      {path:"ds-algo/queue/completetree/reversequeue", component:ReversequeueComponent},
     
      
    ])
  ]
})
export class QueueModule { }
