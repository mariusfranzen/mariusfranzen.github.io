import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { AppCommonModule } from '../common/app-common.module';

@NgModule({
  declarations: [
    ResumeComponent,
    MenuComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ]
})
export class MainModule { }
