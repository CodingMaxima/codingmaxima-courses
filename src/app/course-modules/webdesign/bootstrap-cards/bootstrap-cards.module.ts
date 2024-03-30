import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { CardsComponent } from './cards/cards.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';



@NgModule({
  declarations: [
    AssignmentOneComponent,
    AssignmentTwoComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'webdesign/bootstrap-cards/cards', component:  CardsComponent},
      { path: 'webdesign/bootstrap-cards/assignment-one', component:  AssignmentOneComponent},
      { path: 'webdesign/bootstrap-cards/assignment-two', component:  AssignmentTwoComponent},
    ])
  ]
})
export class BootstrapCardsModule { }
