import { Component } from '@angular/core';
import { IStudent } from './interface/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-test';
  student: IStudent = {
    name: 'Trang ne',
    age: 20,
    imageUrl: 'https://picsum.photos/200/300',
    status: true,
  };

  myName = 'trang trang trang';
  run() {
    return `myName ${this.myName}`;
  }

  showStudentName() {
    return this.student.name;
  }
  setName(newName: string) {
    this.student.name = newName;
  }
}
