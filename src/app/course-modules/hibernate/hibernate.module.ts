import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionModule } from './introduction/introduction.module';
import { JpaModule } from './jpa/jpa.module';
import { PracticalsModule } from './practicals/practicals.module';
import { CachingModule } from './caching/caching.module';
import { OthersModule } from './others/others.module';
import { HqlModule } from './hql/hql.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IntroductionModule,
    JpaModule,
    PracticalsModule,
    CachingModule,
    OthersModule,
    HqlModule
  ]
})
export class HibernateModule { }
