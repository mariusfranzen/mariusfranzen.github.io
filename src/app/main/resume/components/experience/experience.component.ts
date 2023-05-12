import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {
  @Input() date!: [Date, Date?];
  @Input() title: string = '';
  @Input() description: string[] = [];

  startDate = '';
  endDate = '';
  hasEndDate = false;
  singleMonth = false;

  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  ngOnInit(): void {
    if (this.date[1]) {
      this.hasEndDate = true;
      if (this.date[0].getMonth() == this.date[1].getMonth() && this.date[0].getFullYear() == this.date[1].getFullYear()) {
        this.singleMonth = true;
      } else {
        this.endDate = `${this.monthNames[this.date[1]!.getMonth()]} ${this.date[1]!.getFullYear()}`;
      }
    }
    this.startDate = `${this.monthNames[this.date[0].getMonth()]} ${this.date[0].getFullYear()}`;
  }
}
