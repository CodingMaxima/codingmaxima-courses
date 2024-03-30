import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionModule } from './introduction/introduction.module';
import { BasicProblemsModule } from './basic-problems/basic-problems.module';
import { ListsTuplesDictionariesModule } from './lists-tuples-dictionaries/lists-tuples-dictionaries.module';
import { FunctionModule } from './function/function.module';
import { ArgsKwargsModule } from './args-kwargs/args-kwargs.module';
import { DecoratorsModule } from './decorators/decorators.module';
import { ObjectOrientedProgrammingConceptsModule } from './object-oriented-programming-concepts/object-oriented-programming-concepts.module';
import { ExceptionHandlingModule } from './exception-handling/exception-handling.module';
import { ModulesModule } from './modules/modules.module';
import { DunderMagicMethodsModule } from './dunder-magic-methods/dunder-magic-methods.module';
import { FileHandlingModule } from './file-handling/file-handling.module';
import { WebScrapingModule } from './web-scraping/web-scraping.module';
import { DebugingCodeModule } from './debuging-code/debuging-code.module';
import { MathematicalAnalysisIntroModule } from './mathematical-analysis-intro/mathematical-analysis-intro.module';
import { PattrensModule } from './pattrens/pattrens.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IntroductionModule,
    BasicProblemsModule,
    PattrensModule,
    ListsTuplesDictionariesModule,
    FunctionModule,
    ArgsKwargsModule,
    DecoratorsModule,
    ObjectOrientedProgrammingConceptsModule,
    ExceptionHandlingModule,
    ModulesModule,
    DunderMagicMethodsModule,
    WebScrapingModule,
    FileHandlingModule,
    DebugingCodeModule,
    MathematicalAnalysisIntroModule
  ]
})
export class PythonModule { }
