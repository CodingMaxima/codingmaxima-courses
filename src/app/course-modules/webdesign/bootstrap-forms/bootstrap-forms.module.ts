import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';



@NgModule({
  declarations: [
    FormsComponent,
    AssignmentOneComponent,
    AssignmentTwoComponent,
    AssignmentThreeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'webdesign/bootstrap-forms/forms', component:  FormsComponent},
      { path: 'webdesign/bootstrap-forms/assignment-one', component:  AssignmentOneComponent},
      { path: 'webdesign/bootstrap-forms/assignment-two', component:  AssignmentTwoComponent},
      { path: 'webdesign/bootstrap-forms/assignment-three', component:  AssignmentThreeComponent},

    ])
  ]
})
export class BootstrapFormsModule { }
