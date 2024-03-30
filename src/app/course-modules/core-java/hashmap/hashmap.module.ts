import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { ReadandprintComponent } from './readandprint/readandprint.component';
import { NumberoccuranceComponent } from './numberoccurance/numberoccurance.component';
import { MostoccurancenumberComponent } from './mostoccurancenumber/mostoccurancenumber.component';
import { CharoccuranceComponent } from './charoccurance/charoccurance.component';
import { MostoccurancecharComponent } from './mostoccurancechar/mostoccurancechar.component';
import { DuplicatecharsComponent } from './duplicatechars/duplicatechars.component';
import { MostoccurancestringComponent } from './mostoccurancestring/mostoccurancestring.component';
import { LongeststringComponent } from './longeststring/longeststring.component';
import { UniquenumbersumComponent } from './uniquenumbersum/uniquenumbersum.component';
import { GetuniquenumberComponent } from './getuniquenumber/getuniquenumber.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';



@NgModule({
  declarations: [
    IntroductionComponent,
    ReadandprintComponent,
    NumberoccuranceComponent,
    MostoccurancenumberComponent,
    CharoccuranceComponent,
    MostoccurancecharComponent,
    DuplicatecharsComponent,
    MostoccurancestringComponent,
    LongeststringComponent,
    UniquenumbersumComponent,
    GetuniquenumberComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"core-java/hashmap/introduction", component:IntroductionComponent},
      {path:"core-java/hashmap/readandprint", component:ReadandprintComponent},
      {path:"core-java/hashmap/numberoccurance", component:NumberoccuranceComponent},
      {path:"core-java/hashmap/mostoccurancenumber", component:MostoccurancenumberComponent},
      {path:"core-java/hashmap/charoccurance", component:CharoccuranceComponent},
      {path:"core-java/hashmap/mostoccurancechar", component:MostoccurancecharComponent},
      {path:"core-java/hashmap/duplicatechars", component:DuplicatecharsComponent},
      {path:"core-java/hashmap/mostoccurancestring", component:MostoccurancestringComponent},
      {path:"core-java/hashmap/longeststring", component:LongeststringComponent},
      {path:"core-java/hashmap/getuniquenumber", component:GetuniquenumberComponent},
      {path:"core-java/hashmap/uniquenumbersum", component:UniquenumbersumComponent}
      
    ])
  ]
})
export class HashmapModule { }
