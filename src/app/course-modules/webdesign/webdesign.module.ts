import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlModule } from './html-introduction/html.module';
import { CssModule } from './css/css.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { HtmlFormsModule } from './html-forms/html-forms.module';
import { BootstrapFormsModule } from './bootstrap-forms/bootstrap-forms.module';
import { BootstrapTabsModule } from './bootstrap-tabs/bootstrap-tabs.module';
import { BootstrapCardsModule } from './bootstrap-cards/bootstrap-cards.module';
import { BootstrapSlideShowModule } from './bootstrap-slide-show/bootstrap-slide-show.module';
import { CssAnimationsModule } from './css-animations/css-animations.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HtmlModule,
    HtmlFormsModule,
    CssModule,
    CssAnimationsModule,
    BootstrapModule,
    BootstrapFormsModule,
    BootstrapTabsModule,
    BootstrapCardsModule,
    BootstrapSlideShowModule
  ]
})
export class WebdesignModule { }
