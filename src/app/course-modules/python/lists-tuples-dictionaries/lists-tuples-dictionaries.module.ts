import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ListsIntroComponent } from './lists-intro/lists-intro.component';
import { KeyOccuranceComponent } from './key-occurance/key-occurance.component';
import { SortArrayComponent } from './sort-array/sort-array.component';
import { NegativeElementsComponent } from './negative-elements/negative-elements.component';
import { UnionInsertionArrayComponent } from './union-insertion-array/union-insertion-array.component';
import { CountPairsComponent } from './count-pairs/count-pairs.component';
import { MaxSubarraySumComponent } from './max-subarray-sum/max-subarray-sum.component';
import { TuplesElementsComponent } from './tuples-elements/tuples-elements.component';
import { FrequencyTupleComponent } from './frequency-tuple/frequency-tuple.component';
import { VowelsCountComponent } from './vowels-count/vowels-count.component';
import { CharVowelComponent } from './char-vowel/char-vowel.component';
import { CommonElementsComponent } from './common-elements/common-elements.component';
import { EachNooccuranceComponent } from './each-nooccurance/each-nooccurance.component';
import { CharOccurStringComponent } from './char-occur-string/char-occur-string.component';
import { RepeatedCharComponent } from './repeated-char/repeated-char.component';
import { RepeatedNumberComponent } from './repeated-number/repeated-number.component';
import { UniqueNosumComponent } from './unique-nosum/unique-nosum.component';
import { UniqueNumberComponent } from './unique-number/unique-number.component';
import { DuplicateCharComponent } from './duplicate-char/duplicate-char.component';
import { LongestStringComponent } from './longest-string/longest-string.component';


@NgModule({
  declarations: [
    ListsIntroComponent,
    KeyOccuranceComponent,
    SortArrayComponent,
    NegativeElementsComponent,
    UnionInsertionArrayComponent,
    CountPairsComponent,
    MaxSubarraySumComponent,
    TuplesElementsComponent,
    FrequencyTupleComponent,
    VowelsCountComponent,
    CharVowelComponent,
    CommonElementsComponent,
    EachNooccuranceComponent,
    CharOccurStringComponent,
    RepeatedCharComponent,
    RepeatedNumberComponent,
    UniqueNumberComponent,
    UniqueNosumComponent,
    DuplicateCharComponent,
    LongestStringComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'python/lists-tuples-dictionaries/lists-intro', component: ListsIntroComponent },
      { path: 'python/lists-tuples-dictionaries/key-occurance', component: KeyOccuranceComponent },
      { path: 'python/lists-tuples-dictionaries/sort-array', component: SortArrayComponent },
      { path: 'python/lists-tuples-dictionaries/negative-elements', component: NegativeElementsComponent },
      { path: 'python/lists-tuples-dictionaries/union-insertion-array', component: UnionInsertionArrayComponent },
      { path: 'python/lists-tuples-dictionaries/count-pairs', component: CountPairsComponent },
      { path: 'python/lists-tuples-dictionaries/max-subarray-sum', component: MaxSubarraySumComponent },
      { path: 'python/lists-tuples-dictionaries/tuples-elements', component: TuplesElementsComponent },
      { path: 'python/lists-tuples-dictionaries/frequency-tuple', component: FrequencyTupleComponent },
      { path: 'python/lists-tuples-dictionaries/vowels-count', component: VowelsCountComponent },
      { path: 'python/lists-tuples-dictionaries/char-vowel', component: CharVowelComponent },
      { path: 'python/lists-tuples-dictionaries/common-elements', component: CommonElementsComponent },
      { path: 'python/lists-tuples-dictionaries/each-nooccurance', component: EachNooccuranceComponent },
      { path: 'python/lists-tuples-dictionaries/char-occur-string', component: CharOccurStringComponent },
      { path: 'python/lists-tuples-dictionaries/repeated-char', component: RepeatedCharComponent },
      { path: 'python/lists-tuples-dictionaries/repeated-number', component: RepeatedNumberComponent },
      { path: 'python/lists-tuples-dictionaries/unique-number', component: UniqueNumberComponent },
      { path: 'python/lists-tuples-dictionaries/unique-nosum', component: UniqueNosumComponent },
      { path: 'python/lists-tuples-dictionaries/duplicate-char', component: DuplicateCharComponent },
      { path: 'python/lists-tuples-dictionaries/longest-string', component: LongestStringComponent },
    ])
  ]
})
export class ListsTuplesDictionariesModule { }
