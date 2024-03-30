import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PyPatternOneComponent } from './py-pattern-one/py-pattern-one.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { PyPatternTwoComponent } from './py-pattern-two/py-pattern-two.component';
import { PyPatternThreeComponent } from './py-pattern-three/py-pattern-three.component';
import { PyPatternFourComponent } from './py-pattern-four/py-pattern-four.component';
import { PyPatternFiveComponent } from './py-pattern-five/py-pattern-five.component';
import { PyPatternSixComponent } from './py-pattern-six/py-pattern-six.component';
import { PyPatternSevenComponent } from './py-pattern-seven/py-pattern-seven.component';
import { PyPatternEightComponent } from './py-pattern-eight/py-pattern-eight.component';
import { PyPatternNineComponent } from './py-pattern-nine/py-pattern-nine.component';
import { PyPatternTenComponent } from './py-pattern-ten/py-pattern-ten.component';
import { PyPatternElevenComponent } from './py-pattern-eleven/py-pattern-eleven.component';
import { PyPatternTwelveComponent } from './py-pattern-twelve/py-pattern-twelve.component';
import { PyPatternThirteenComponent } from './py-pattern-thirteen/py-pattern-thirteen.component';
import { PyPatternFourteenComponent } from './py-pattern-fourteen/py-pattern-fourteen.component';
import { PyPatternFifteenComponent } from './py-pattern-fifteen/py-pattern-fifteen.component';



@NgModule({
  declarations: [
    PyPatternOneComponent,
    PyPatternTwoComponent,
    PyPatternThreeComponent,
    PyPatternFourComponent,
    PyPatternFiveComponent,
    PyPatternSixComponent,
    PyPatternSevenComponent,
    PyPatternEightComponent,
    PyPatternNineComponent,
    PyPatternTenComponent,
    PyPatternElevenComponent,
    PyPatternTwelveComponent,
    PyPatternThirteenComponent,
    PyPatternFourteenComponent,
    PyPatternFifteenComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'python/pattrens/py-pattern-one', component: PyPatternOneComponent},
      { path: 'python/pattrens/py-pattern-two', component: PyPatternTwoComponent},
      { path: 'python/pattrens/py-pattern-three', component: PyPatternThreeComponent},
      {path: 'python/pattrens/py-pattern-four', component: PyPatternFourComponent},
      {path: 'python/pattrens/py-pattern-five', component: PyPatternFiveComponent},
      {path: 'python/pattrens/py-pattern-six', component: PyPatternSixComponent},
      {path: 'python/pattrens/py-pattern-seven', component: PyPatternSevenComponent},
      {path: 'python/pattrens/py-pattern-eight', component: PyPatternEightComponent},
      {path: 'python/pattrens/py-pattern-nine', component: PyPatternNineComponent},
      {path: 'python/pattrens/py-pattern-ten', component: PyPatternTenComponent},
      {path: 'python/pattrens/py-pattern-eleven', component: PyPatternElevenComponent},
      {path: 'python/pattrens/py-pattern-twelve', component: PyPatternTwelveComponent},
      {path: 'python/pattrens/py-pattern-thirteen', component: PyPatternThirteenComponent},
      {path: 'python/pattrens/py-pattern-fourteen', component: PyPatternFourteenComponent},
      {path: 'python/pattrens/py-pattern-fifteen', component: PyPatternFifteenComponent}
      
    ]
    )
  ]
})
export class PattrensModule { }
