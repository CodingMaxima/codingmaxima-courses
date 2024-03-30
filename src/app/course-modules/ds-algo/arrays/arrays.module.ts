import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxsubarraysumComponent } from './maxsubarraysum/maxsubarraysum.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ContainerwithmostwaterComponent } from './containerwithmostwater/containerwithmostwater.component';
import { BuyandsellComponent } from './buyandsell/buyandsell.component';
import { FinddublicatesComponent } from './finddublicates/finddublicates.component';
import { FirstelementtooccurktimesComponent } from './firstelementtooccurktimes/firstelementtooccurktimes.component';
import { IntersectionoftwoarrayComponent } from './intersectionoftwoarray/intersectionoftwoarray.component';
import { KadansalgoComponent } from './kadansalgo/kadansalgo.component';
import { LongestcommanprefixComponent } from './longestcommanprefix/longestcommanprefix.component';
import { MajorityelementComponent } from './majorityelement/majorityelement.component';
import { MissingnumberComponent } from './missingnumber/missingnumber.component';
import { TrappingrainComponent } from './trappingrain/trappingrain.component';
import { ProductarrarpuzzleComponent } from './productarrarpuzzle/productarrarpuzzle.component';
import { SpirallytraversingComponent } from './spirallytraversing/spirallytraversing.component';
import { SubarraygivensumComponent } from './subarraygivensum/subarraygivensum.component';
import { TripletsumComponent } from './tripletsum/tripletsum.component';
import { RemovedublicatesComponent } from './removedublicates/removedublicates.component';
import { KlargestComponent } from './klargest/klargest.component';



@NgModule({
  declarations: [
    MaxsubarraysumComponent,
    ContainerwithmostwaterComponent,
    BuyandsellComponent,
    FinddublicatesComponent,
    FirstelementtooccurktimesComponent,
    IntersectionoftwoarrayComponent,
    KadansalgoComponent,
    LongestcommanprefixComponent,
    MajorityelementComponent,
    MissingnumberComponent,
    TrappingrainComponent,
    ProductarrarpuzzleComponent,
    SpirallytraversingComponent,
    SubarraygivensumComponent,
    TripletsumComponent,
    RemovedublicatesComponent,
    KlargestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"ds-algo/arrays/maxsubarraysum", component:MaxsubarraysumComponent},
      {path:"ds-algo/arrays/containerwithmostwater", component:ContainerwithmostwaterComponent},
      {path:"ds-algo/arrays/buyandsell", component:BuyandsellComponent},
      {path:"ds-algo/arrays/finddublicates", component:FinddublicatesComponent},
      {path:"ds-algo/arrays/firstelementtooccurktimes", component:FirstelementtooccurktimesComponent},
      {path:"ds-algo/arrays/intersectionoftwoarray", component:IntersectionoftwoarrayComponent},
      {path:"ds-algo/arrays/kadansalgo", component:KadansalgoComponent},
      {path:"ds-algo/arrays/longestcomman", component:LongestcommanprefixComponent},
      {path:"ds-algo/arrays/majorityelement", component:MajorityelementComponent},
      {path:"ds-algo/arrays/missingnumber", component:MissingnumberComponent},
      {path:"ds-algo/arrays/trappingrain", component:TrappingrainComponent},
      {path:"ds-algo/arrays/productarrarpuzzle", component:ProductarrarpuzzleComponent},
      {path:"ds-algo/arrays/spirallytraversing", component:SpirallytraversingComponent},
      {path:"ds-algo/arrays/subarraygivensum", component:SubarraygivensumComponent},
      {path:"ds-algo/arrays/tripletsum", component:TripletsumComponent},
      {path:"ds-algo/arrays/removedublicates", component:RemovedublicatesComponent},
      {path:"ds-algo/arrays/klargest", component:KlargestComponent},
      
    ])
    
  ]
})
export class ArraysModule { }
