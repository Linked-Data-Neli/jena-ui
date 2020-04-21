import { Injectable } from '@angular/core';
import { Query1Component } from './query1/query1.component';
import { FormItem } from '../form-item';
import { Query2Component } from './query2/query2.component';
import { Query3Component } from './query3/query3.component';

@Injectable({
  providedIn: 'root'
})
export class FormDisplayService {
  getForms(): FormItem[] {
      return [
        new FormItem(Query1Component, 'Student Details'),
        new FormItem(Query2Component,  'Course Details'),
        new FormItem(Query3Component, 'Faculty Details'),

      ]
  }
}
