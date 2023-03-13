import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    ResumeComponent,
    MenuComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
