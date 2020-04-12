import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jena-ui';
  isStudentDetailsForm: boolean;
  isCourseDetailsForm: boolean;

  queryOptions = [];

  ngOnInit() {
    this.queryOptions.push("Student Details")
    this.queryOptions.push("Course Details")
  }


  onSelect(query: string) {
    // create form
    console.log(query)
  }
}
