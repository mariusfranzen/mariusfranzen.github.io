import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { AppCommonModule } from '../common/app-common.module';
import { SkillMeterComponent } from './resume/components/skill-meter/skill-meter.component';

@NgModule({
  declarations: [
    ResumeComponent,
    MenuComponent,
    MainComponent,
    SkillMeterComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ]
})
export class MainModule { }
