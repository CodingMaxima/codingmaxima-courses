import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountprimesComponent } from './countprimes/countprimes.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { EachnumbercountComponent } from './eachnumbercount/eachnumbercount.component';
import { ExcludenumberComponent } from './excludenumber/excludenumber.component';
import { FindelementComponent } from './findelement/findelement.component';
import { FindkeypositionsComponent } from './findkeypositions/findkeypositions.component';
import { IntroductionarrayComponent } from './introductionarray/introductionarray.component';
import { KeycountComponent } from './keycount/keycount.component';
import { MaxofarrayComponent } from './maxofarray/maxofarray.component';
import { MinofarrayComponent } from './minofarray/minofarray.component';
import { NumberofpairsComponent } from './numberofpairs/numberofpairs.component';
import { ReadandprintComponent } from './readandprint/readandprint.component';
import { ReverseeachelementComponent } from './reverseeachelement/reverseeachelement.component';
import { ReverseofarrayComponent } from './reverseofarray/reverseofarray.component';
import { SecondmaxComponent } from './secondmax/secondmax.component';
import { StaticComponent } from './static/static.component';
import { SuperarrayComponent } from './superarray/superarray.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { SortingarrayComponent } from './sortingarray/sortingarray.component';




@NgModule({
  declarations: [
    StaticComponent,
    DynamicComponent,
    ReadandprintComponent,
    FindelementComponent,
    KeycountComponent,
    FindkeypositionsComponent,
    MaxofarrayComponent,
    MinofarrayComponent,
    SecondmaxComponent,
    ReverseofarrayComponent,
    ReverseeachelementComponent,
    CountprimesComponent,
    ExcludenumberComponent,
    SuperarrayComponent,
    EachnumbercountComponent,
    NumberofpairsComponent,
    IntroductionarrayComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'core-java/arrays/countprimes', component: CountprimesComponent },
      { path: 'core-java/arrays/dynamic', component: DynamicComponent },
      { path: 'core-java/arrays/eachnumbercount', component: EachnumbercountComponent },
      { path: 'core-java/arrays/excludenumber', component: ExcludenumberComponent },
      { path: 'core-java/arrays/findelement', component: FindelementComponent },
      { path: 'core-java/arrays/findkeypositions', component: FindkeypositionsComponent },
      { path: 'core-java/arrays/introductionarray', component: IntroductionarrayComponent },
      { path: 'core-java/arrays/keycount', component: KeycountComponent },
      { path: 'core-java/arrays/maxofarray', component: MaxofarrayComponent },
      { path: 'core-java/arrays/minofarray', component: MinofarrayComponent },
      { path: 'core-java/arrays/numberofpairs', component: NumberofpairsComponent },
      { path: 'core-java/arrays/readandprint', component: ReadandprintComponent },
      { path: 'core-java/arrays/reverseeachelement', component: ReverseeachelementComponent },
      {path : 'core-java/arrays/sortingarray',component: SortingarrayComponent},
      { path: 'core-java/arrays/reverseofarray', component: ReverseofarrayComponent },
      { path: 'core-java/arrays/secondmax', component: SecondmaxComponent },
      { path: 'core-java/arrays/static', component: StaticComponent },
      { path: 'core-java/arrays/superarray', component: SuperarrayComponent }
    ])
  ]
})

export class ArraysModule { }