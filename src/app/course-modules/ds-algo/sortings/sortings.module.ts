import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnagramComponent } from './anagram/anagram.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { BubbleComponent } from './bubble/bubble.component';
import { CounttripletComponent } from './counttriplet/counttriplet.component';
import { FindtripletsumComponent } from './findtripletsum/findtripletsum.component';
import { HeapsortComponent } from './heapsort/heapsort.component';
import { InsertionsortComponent } from './insertionsort/insertionsort.component';
import { MergesortComponent } from './mergesort/mergesort.component';
import { QuicksortComponent } from './quicksort/quicksort.component';
import { Sort1and2Component } from './sort1and2/sort1and2.component';
import { WavearrayComponent } from './wavearray/wavearray.component';



@NgModule({
  declarations: [
    AnagramComponent,
    BubbleComponent,
    CounttripletComponent,
    FindtripletsumComponent,
    HeapsortComponent,
    InsertionsortComponent,
    MergesortComponent,
    QuicksortComponent,
    Sort1and2Component,
    WavearrayComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"ds-algo/sortings/anagram", component:AnagramComponent},
      {path:"ds-algo/sortings/bubble", component:BubbleComponent},
      {path:"ds-algo/sortings/counttriplet", component:CounttripletComponent},
      {path:"ds-algo/sortings/findtripletsum", component:FindtripletsumComponent},
      {path:"ds-algo/sortings/heapsort", component:HeapsortComponent},
      {path:"ds-algo/sortings/insertionsort", component:InsertionsortComponent},
      {path:"ds-algo/sortings/mergesort", component:MergesortComponent},
      {path:"ds-algo/sortings/quicksort", component:QuicksortComponent},
      {path:"ds-algo/sortings/sort1and2", component:Sort1and2Component},
      {path:"ds-algo/sortings/wavearray", component:WavearrayComponent},
      
     
      
    ])
  ]
})
export class SortingsModule { }
