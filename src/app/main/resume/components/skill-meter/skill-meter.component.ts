import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-meter',
  templateUrl: './skill-meter.component.html',
  styleUrls: ['./skill-meter.component.scss'],
  host: { 'class': 'w-50' }
})
export class SkillMeterComponent implements OnInit {
  @Input() name: string = 'test';
  @Input() level: number = 50;
  @Input() skillDescription?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
