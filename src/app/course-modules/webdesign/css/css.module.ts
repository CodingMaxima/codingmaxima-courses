import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { CssBoxModelComponent } from './css-box-model/css-box-model.component';
import { TablesAssignmentComponent } from './tables-assignment/tables-assignment.component';
import { ButtonAssignmentComponent } from './button-assignment/button-assignment.component';
import { FormsLoginAssignmentComponent } from './forms-login-assignment/forms-login-assignment.component';
import { FormsSignupAssignmentComponent } from './forms-signup-assignment/forms-signup-assignment.component';
import { PropertiesOfCSSComponent } from './properties-of-css/properties-of-css.component';

@NgModule({
  declarations: [
    IntroComponent,
    CssBoxModelComponent,
    TablesAssignmentComponent,
    ButtonAssignmentComponent,
    FormsLoginAssignmentComponent,
    FormsSignupAssignmentComponent,
    PropertiesOfCSSComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'webdesign/css/intro', component:  IntroComponent},
      { path: 'webdesign/css/properties-of-css', component:  PropertiesOfCSSComponent},
      { path: 'webdesign/css/box-model', component:  CssBoxModelComponent},
      { path: 'webdesign/css/tables-assignment', component:  TablesAssignmentComponent},
      { path: 'webdesign/css/button-assignment', component:  ButtonAssignmentComponent},
      { path: 'webdesign/css/forms-login-assignment', component:  FormsLoginAssignmentComponent},
      { path: 'webdesign/css/forms-signup-assignment', component:  FormsSignupAssignmentComponent},
      
    ])
  ]
})
export class CssModule { }
