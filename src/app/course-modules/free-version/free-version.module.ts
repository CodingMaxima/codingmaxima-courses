import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { FreeJavaModule } from './free-java/free-java.module';
import { FreeMySqlModule } from './free-my-sql/free-my-sql.module';
import { FreePythonModule } from './free-python/free-python.module';
import { FreeJavascriptModule } from './free-javascript/free-javascript.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FreeJavaModule,
    FreeMySqlModule,
    FreePythonModule,
    FreeJavascriptModule
  ]
})
export class FreeVersionModule { }
