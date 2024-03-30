import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionModule } from './introduction/introduction.module';
import { ArraysModule } from './arrays/arrays.module';
import { TwodArrayModule } from './twod-array/twod-array.module';
import { SearchingModule } from './searching/searching.module';
import { SortingsModule } from './sortings/sortings.module';
import { StacksModule } from './stacks/stacks.module';
import { QueueModule } from './queue/queue.module';
import { LinkedListModule } from './linked-list/linked-list.module';
import { GraphsModule } from './graphs/graphs.module';
import { TreesModule } from './trees/trees.module';
import { DynamicProgrammingModule } from './dynamic-programming/dynamic-programming.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IntroductionModule,
    ArraysModule,
    TwodArrayModule,
    SearchingModule,
    SortingsModule,
    StacksModule,
    QueueModule,
    LinkedListModule,
    GraphsModule,
    TreesModule,
    DynamicProgrammingModule,


  ]
})
export class DsAlgoModule { }
