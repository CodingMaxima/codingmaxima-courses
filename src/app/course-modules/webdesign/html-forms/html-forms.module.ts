import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { FormsOneComponent } from './forms-one/forms-one.component';
import { FormsTwoComponent } from './forms-two/forms-two.component';
import { FormsThreeComponent } from './forms-three/forms-three.component';

@NgModule({
  declarations: [
    FormsComponent,
    FormsOneComponent,
    FormsTwoComponent,
    FormsThreeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'webdesign/html-forms/forms', component:  FormsComponent},
      { path: 'webdesign/html-forms/forms-1', component:  FormsOneComponent},
      { path: 'webdesign/html-forms/forms-2', component:  FormsTwoComponent},
      { path: 'webdesign/html-forms/forms-3', component:  FormsThreeComponent},
    ])
  ]
})
export class HtmlFormsModule { }
