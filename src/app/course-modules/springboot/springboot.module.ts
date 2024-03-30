import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroModule } from './intro/intro.module';
import { BootModule } from './boot/boot.module';
import { SpringaopModule } from './springaop/springaop.module';
import { SwaggerModule } from './swagger/swagger.module';
import { SpringsequrityModule } from './springsequrity/springsequrity.module';
import { Project1Module } from './project1/project1.module';
import { Project2Module } from './project2/project2.module';
import { BasicprojectsModule } from './basicprojects/basicprojects.module';
import { OtherconceptsModule } from './otherconcepts/otherconcepts.module';
import { ErrorModule } from './error/error.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IntroModule,
    BootModule,
    BasicprojectsModule,
    OtherconceptsModule,
    ErrorModule,
    SpringaopModule,
    SwaggerModule,
    SpringsequrityModule,
    Project1Module,
    Project2Module   
  ]
})
export class SpringbootModule { }
