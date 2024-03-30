import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HibernateModule } from './hibernate/hibernate.module';
import { LowlLevelDesignModule } from './lowl-level-design/lowl-level-design.module';
import { MySqlModule } from './my-sql/my-sql.module';
import { SpringbootModule } from './springboot/springboot.module';
import { WebdesignModule } from './webdesign/webdesign.module';
import { CoreJavaModule } from './core-java/core-java.module';
import { PythonModule } from './python/python.module';
import { ReactModule } from './react/react.module';
import { AngularModule } from './angular/angular.module';
import { DsAlgoModule } from './ds-algo/ds-algo.module';
import { FreeVersionModule } from './free-version/free-version.module';
import { JavascriptModule } from './javascript/javascript.module';
import { GithubModule } from './github/github.module';


const modules = [
  HibernateModule,
  CoreJavaModule,
  LowlLevelDesignModule,
  MySqlModule,
  SpringbootModule,
  WebdesignModule,
  PythonModule,
  ReactModule,
  AngularModule,
  DsAlgoModule,
  FreeVersionModule,
  JavascriptModule,
  GithubModule
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    ...modules
  ]
})
export class CourseCmModule { }
