import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ArraytoBSTComponent } from './arrayto-bst/arrayto-bst.component';
import { ArraysubsetComponent } from './arraysubset/arraysubset.component';
import { CheckforbstComponent } from './checkforbst/checkforbst.component';
import { DeletebstComponent } from './deletebst/deletebst.component';
import { TargetinbstComponent } from './targetinbst/targetinbst.component';
import { FirstandlastoccurenceComponent } from './firstandlastoccurence/firstandlastoccurence.component';
import { InsertinbstComponent } from './insertinbst/insertinbst.component';
import { LargestbstComponent } from './largestbst/largestbst.component';
import { LowestcommanacesterComponent } from './lowestcommanacester/lowestcommanacester.component';
import { PretopostComponent } from './pretopost/pretopost.component';
import { TopviewoftreeComponent } from './topviewoftree/topviewoftree.component';
import { KthsmallestComponent } from './kthsmallest/kthsmallest.component';



@NgModule({
  declarations: [
    ArraysubsetComponent,
    CheckforbstComponent,
    DeletebstComponent,
    TargetinbstComponent,
    FirstandlastoccurenceComponent,
    InsertinbstComponent,
    LargestbstComponent,
    LowestcommanacesterComponent,
    PretopostComponent,
    TopviewoftreeComponent,
    KthsmallestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"ds-algo/trees/arrayto-bst", component:ArraytoBSTComponent},
      {path:"ds-algo/trees/arraysubset", component:ArraysubsetComponent},
      {path:"ds-algo/trees/checkforbst", component:CheckforbstComponent},
      {path:"ds-algo/trees/deletebst", component:DeletebstComponent},
      {path:"ds-algo/trees/targetinbst", component:TargetinbstComponent},
      {path:"ds-algo/trees/firstandlastoccurence", component:FirstandlastoccurenceComponent},
      {path:"ds-algo/trees/insertinbst", component:InsertinbstComponent},
      {path:"ds-algo/trees/largestbst", component:LargestbstComponent},
      {path:"ds-algo/trees/lowestcommanacester", component:LowestcommanacesterComponent},
      {path:"ds-algo/trees/pretopost", component:PretopostComponent},
      {path:"ds-algo/trees/topviewoftree", component:TopviewoftreeComponent},
      {path:"ds-algo/trees/kthsmallest", component:KthsmallestComponent},
     
      
    ])
  ]
})
export class TreesModule { }
