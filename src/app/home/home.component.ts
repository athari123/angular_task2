import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Student Details';

 
  StudentName: string ='';        // Declaring a variable aVariable
  onInputChange(event: Event):void {
    this.StudentName = (event.target as HTMLInputElement).value;

  }
}
