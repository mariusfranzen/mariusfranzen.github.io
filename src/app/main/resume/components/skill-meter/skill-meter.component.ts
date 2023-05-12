import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-meter',
  templateUrl: './skill-meter.component.html',
  styleUrls: ['./skill-meter.component.scss'],
  host: { 'class': 'w-50 mb-4' }
})
export class SkillMeterComponent {
  @Input() name: string = 'test';
  @Input() level: number = 50;
  @Input() skillDescription?: string;
}
