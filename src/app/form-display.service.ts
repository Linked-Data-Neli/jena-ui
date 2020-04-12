import { Injectable } from '@angular/core';
import { Query1Component } from './forms/query1/query1.component';
import { FormItem } from './form-item';

@Injectable({
  providedIn: 'root'
})
export class FormDisplayService {
  getForms(): FormItem[] {
      return [
        new FormItem(Query1Component, 'Student Details')
      ]
  }
}
