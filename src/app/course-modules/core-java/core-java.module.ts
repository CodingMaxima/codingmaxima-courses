import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashmapModule } from './hashmap/hashmap.module';
import { ArraysModule } from './arrays/arrays.modules';
import { PattrenModule } from './pattren/pattren.modules';
import { Basic_programModule } from './basic_program/basic_program.module';
import { StringModule } from './strings/strings.module';
import { SharedModule } from '../../shared-module/shared.module';
import { MethodsModules } from './methods/methods.modules';
import { ObjectclassModule } from './objectclass/objectclass.module';
import { PojoclassesModule } from './pojoclasses/pojoclasses.module';
import { ClassesrelationsModule } from './classesrelations/classesrelations.module';
import { ManagementsystemsModule } from './managementsystems/managementsystems.module';
import { OopsModule } from './oops/oops.module';
import { ExceptionsModule } from './exceptions/exceptions.module';
import { IntroModule } from './intro/intro.module';
import { CollectionsModule } from './collections/collections.module';
import { MultiModule } from './multi/multi.module';
import { OthersModule } from './others/others.module';
import { FileHandlingModule } from './file-handling/file-handling.module';
import { MultiThreadingModule } from './multi-threading/multi-threading.module';
import { InterviewQuestionsModule } from './interview-questions/interview-questions.module';
import { AdvanceModule } from './advance/advance.module';
import { SortingarrayComponent } from './arrays/sortingarray/sortingarray.component';
import { LoopsModule } from './loops/loops.module';





@NgModule({
  declarations: [
  
    SortingarrayComponent
  ],
  imports: [
    SharedModule,
    IntroModule,
    StringModule,
    CommonModule,
    ArraysModule,
    PattrenModule,
    Basic_programModule,
    CollectionsModule,
    HashmapModule,
    MethodsModules,
    ObjectclassModule,
    PojoclassesModule,
    ClassesrelationsModule,
    ManagementsystemsModule,
    OopsModule,
    ExceptionsModule,
    MultiModule,
    OthersModule,
    FileHandlingModule,
    MultiThreadingModule,
    InterviewQuestionsModule,
    AdvanceModule,
    LoopsModule
  ]
})
export class CoreJavaModule { }
