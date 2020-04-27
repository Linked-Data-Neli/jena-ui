import { Injectable } from '@angular/core';
import { Query1Component } from './query1/query1.component';
import { FormItem } from '../form-item';
import { Query2Component } from './query2/query2.component';
import { Query3Component } from './query3/query3.component';
import { Query4Component } from './query4/query4.component';
import { Query5Component } from './query5/query5.component';

@Injectable({
  providedIn: 'root'
})
export class FormDisplayService {
  getForms(): FormItem[] {
      return [
        new FormItem(Query1Component, 'Student Details'),
        new FormItem(Query2Component,  'Course Details'),
        new FormItem(Query3Component, 'Faculty Details'),
        new FormItem(Query4Component, 'Book Details'),
        new FormItem(Query5Component, 'Student Events')
      ]
  }
}
