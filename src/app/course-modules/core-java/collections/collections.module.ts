import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraylistintroComponent } from './arraylistintro/arraylistintro.component';
import { FindeleComponent } from './findele/findele.component';
import { MinComponent } from './min/min.component';
import { MaxComponent } from './max/max.component';
import { ReverseComponent } from './reverse/reverse.component';
import { StringsComponent } from './strings/strings.component';
import { SecondmaxComponent } from './secondmax/secondmax.component';
import { RouterModule } from '@angular/router';
import { HashsetintroComponent } from './hashsetintro/hashsetintro.component';
import { UniquestringsComponent } from './uniquestrings/uniquestrings.component';
import { UniquenumbersComponent } from './uniquenumbers/uniquenumbers.component';
import { SharedModule } from 'src/app/shared-module/shared.module';



@NgModule({
  declarations: [
    ArraylistintroComponent,
    FindeleComponent,
    MinComponent,
    MaxComponent,
    ReverseComponent,
    StringsComponent,
    SecondmaxComponent,
    UniquenumbersComponent,
    UniquestringsComponent,
    HashsetintroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'core-java/collections/arraylistintro', component:ArraylistintroComponent},
      { path: 'core-java/collections/findele', component:FindeleComponent},
      { path: 'core-java/collections/strings', component:StringsComponent},
      { path: 'core-java/collections/min', component:MinComponent},
      { path: 'core-java/collections/max', component:MaxComponent},
      { path: 'core-java/collections/reverse', component:ReverseComponent},
      { path: 'core-java/collections/secondmax', component:SecondmaxComponent},
      { path: 'core-java/collections/hashsetintro', component:HashsetintroComponent},
      { path: 'core-java/collections/uniquestring', component:UniquestringsComponent},
      { path: 'core-java/collections/uniquenumbers', component:UniquenumbersComponent},
    ])
  ]
})
export class CollectionsModule { }
