import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreComponent } from './pre/pre.component';
import { XmlComponent } from './xml/xml.component';
import { JsonComponent } from './json/json.component';
import { MavenComponent } from './maven/maven.component';
import { RestComponent } from './rest/rest.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PreComponent,
    XmlComponent,
    JsonComponent,
    MavenComponent,
    RestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'springboot/intro/pre', component: PreComponent},
      { path: 'springboot/intro/xml', component: XmlComponent},
      { path: 'springboot/intro/json', component: JsonComponent},
      { path: 'springboot/intro/rest', component: RestComponent},
      { path: 'springboot/intro/maven', component: MavenComponent}
    ])
  ]
})
export class IntroModule { }
