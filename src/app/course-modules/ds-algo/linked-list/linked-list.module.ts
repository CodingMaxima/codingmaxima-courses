import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddtwonumberComponent } from './addtwonumber/addtwonumber.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { IspalidromeComponent } from './ispalidrome/ispalidrome.component';
import { DetectloopComponent } from './detectloop/detectloop.component';
import { MiddleelementComponent } from './middleelement/middleelement.component';
import { IntersectionComponent } from './intersection/intersection.component';
import { EndofnodeComponent } from './endofnode/endofnode.component';
import { SortedlistComponent } from './sortedlist/sortedlist.component';
import { RemoveloopComponent } from './removeloop/removeloop.component';
import { ReverselistComponent } from './reverselist/reverselist.component';
import { Reverselist2Component } from './reverselist2/reverselist2.component';



@NgModule({
  declarations: [
    AddtwonumberComponent,
    IspalidromeComponent,
    DetectloopComponent,
    MiddleelementComponent,
    IntersectionComponent,
    EndofnodeComponent,
    SortedlistComponent,
    RemoveloopComponent,
    ReverselistComponent,
    Reverselist2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"ds-algo/graph/addtwonumber", component:AddtwonumberComponent},
      {path:"ds-algo/graph/ispalidrome", component:IspalidromeComponent},
      {path:"ds-algo/graph/detectloop", component:DetectloopComponent},
      {path:"ds-algo/graph/middleelement", component:MiddleelementComponent},
      {path:"ds-algo/graph/intersection", component:IntersectionComponent},
      {path:"ds-algo/graph/endofnode", component:EndofnodeComponent},
      {path:"ds-algo/graph/sortedlist", component:SortedlistComponent},
      {path:"ds-algo/graph/middleelement", component:MiddleelementComponent},
      {path:"ds-algo/graph/removeloop", component:RemoveloopComponent},
      {path:"ds-algo/graph/reverselist", component:ReverselistComponent},
      {path:"ds-algo/graph/reverselist2", component:Reverselist2Component},
      
      
      
    ])
  ]

})
export class LinkedListModule { }
