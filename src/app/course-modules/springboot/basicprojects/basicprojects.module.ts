import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstProjectComponent } from './first-project/first-project.component';
import { SecondProjectComponent } from './second-project/second-project.component';
import { ThirdProjectComponent } from './third-project/third-project.component';
import { FourthProjectComponent } from './fourth-project/fourth-project.component';
import { FifthProjectComponent } from './fifth-project/fifth-project.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';



@NgModule({
  declarations: [
    FirstProjectComponent,
    SecondProjectComponent,
    ThirdProjectComponent,
    FourthProjectComponent,
    FifthProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'springboot/basicprojects/first-project', component: FirstProjectComponent},
      { path: 'springboot/basicprojects/second-project', component: SecondProjectComponent},
      { path: 'springboot/basicprojects/third-project', component: ThirdProjectComponent},
      { path: 'springboot/basicprojects/fourth-project', component: FourthProjectComponent},
      { path: 'springboot/basicprojects/fifth-project', component: FifthProjectComponent}
    ])
  ]
})
export class BasicprojectsModule { }
