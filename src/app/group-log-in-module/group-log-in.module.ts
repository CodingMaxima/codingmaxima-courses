import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupHeaderComponent } from './group-header/group-header.component';
@NgModule({
  declarations: [
    GroupHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GroupHeaderComponent
  ]
})
export class GroupLogInModule { }
