import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ModulesIntroComponent } from './modules-intro/modules-intro.component';
import { BuiltInModulesComponent } from './built-in-modules/built-in-modules.component';
import { CustomModulesComponent } from './custom-modules/custom-modules.component';
import { ThirdpartyModulesComponent } from './thirdparty-modules/thirdparty-modules.component';



@NgModule({
  declarations: [
    ModulesIntroComponent,
    BuiltInModulesComponent,
    CustomModulesComponent,
    ThirdpartyModulesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'python/modules/modules-intro', component: ModulesIntroComponent },
      { path: 'python/modules/built-in-modules', component: BuiltInModulesComponent },
      { path: 'python/modules/custom-modules', component: CustomModulesComponent },
      { path: 'python/modules/thirdparty-modules', component: ThirdpartyModulesComponent },
   
    ])
  ]
})
export class ModulesModule { }
