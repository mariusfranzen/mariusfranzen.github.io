import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { AppCommonModule } from '../common/app-common.module';
import { SkillMeterComponent } from './resume/components/skill-meter/skill-meter.component';
import { ExperienceComponent } from './resume/components/experience/experience.component';
import { AboutInfoComponent } from './resume/components/about-info/about-info.component';
import { ContactFormComponent } from './resume/components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResumeComponent,
    MenuComponent,
    MainComponent,
    SkillMeterComponent,
    ExperienceComponent,
    AboutInfoComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
