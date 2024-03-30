import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiffcharsComponent } from './diffchars/diffchars.component';
import { DiffstringsComponent } from './diffstrings/diffstrings.component';
import { FindletterComponent } from './findletter/findletter.component';
import { PalindromestringComponent } from './palindromestring/palindromestring.component';
import { ReverseComponent } from './reverse/reverse.component';
import { SpecialstringComponent } from './specialstring/specialstring.component';
import { StringintroComponent } from './stringintro/stringintro.component';
import { StringpoolComponent } from './stringpool/stringpool.component';
import { SwapfirstlastComponent } from './swapfirstlast/swapfirstlast.component';
import { VowelsComponent } from './vowels/vowels.component';
import { VowelsconsonentsComponent } from './vowelsconsonents/vowelsconsonents.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { WrapperclassesComponent } from './wrapperclasses/wrapperclasses.component';



@NgModule({
  declarations: [
    StringintroComponent,
    StringpoolComponent,
    DiffstringsComponent,
    FindletterComponent,
    ReverseComponent,
    PalindromestringComponent,
    SwapfirstlastComponent,
    VowelsComponent,
    VowelsconsonentsComponent,
    SpecialstringComponent,
    DiffcharsComponent,
    WrapperclassesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'core-java/strings/diffchars', component: DiffcharsComponent },
      { path: 'core-java/strings/diffstrings', component: DiffstringsComponent },
      { path: 'core-java/strings/findletter', component: FindletterComponent },
      { path: 'core-java/strings/palindromestring', component: PalindromestringComponent },
      { path: 'core-java/strings/reverse', component: ReverseComponent },
      { path: 'core-java/strings/specialstring', component: SpecialstringComponent },
      { path: 'core-java/strings/stringintro', component: StringintroComponent },
      { path: 'core-java/strings/stringpool', component: StringpoolComponent },
      { path: 'core-java/strings/swapfirstlast', component: SwapfirstlastComponent },
      { path: 'core-java/strings/vowels', component: VowelsComponent },
      { path: 'core-java/strings/vowelsconsonents', component: VowelsconsonentsComponent },
      { path: 'core-java/strings/wrapperclasses', component: WrapperclassesComponent }
    ])
  ]
})
export class StringModule { }
