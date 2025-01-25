import { Component } from '@angular/core';

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrl:'./header.component.css'
})

export class HeaderComponent {
  title = 'EasyTask';
  subTitle = 'Enterprise-level task management without friction';
}
