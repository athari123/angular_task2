import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  Mark: number=0;

 

  studentList: any[] = [

    { Name:'Name1 ', Email:'email@gmail.com ', Mark: 55},

    { Name:'Name2 ', Email:'Email2@gmail.com', Mark: 30},

    

 

   

  ];

 

  getMarkColor(Mark: number): string {

    return Mark < 50 ? 'red-text' : 'green-text';

  }

 

  getPassFailStatus(Mark: number): string {

    return Mark >= 50 ? 'PASS' : 'FAIL';

}

getStyle(): any {

  // Your custom logic to determine the style object

  // For example, let's apply a blue background color and white text color:

  return {

    'background-color': '	 #ffe6f2',

    // 'color': 'white',

    'padding': '10px',

    'text-align': 'center',

  };

}

}