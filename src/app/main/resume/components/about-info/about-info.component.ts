import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.scss'],
  host: { 'class': 'w-50 mb-2' }
})
export class AboutInfoComponent implements OnInit {
  @Input() description = '';
  @Input() info = '';

  constructor() { }

  ngOnInit(): void {
  }

}
