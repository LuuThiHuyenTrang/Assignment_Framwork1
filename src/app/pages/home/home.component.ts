import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  mang = [
    { id: 1, name: 'tranglth', tuoi: 20 },
    { id: 2, name: 'tranglth2', tuoi: 21 },
    { id: 3, name: 'tranglth3', tuoi: 22 },
  ];

  status = true;

  doiStatus() {
    this.status = !this.status;
  }
}
