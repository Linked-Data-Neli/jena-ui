import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Display } from './forms/Display';
import { Response } from './forms/api-response/Response';

@Injectable({
  providedIn: 'root'
})
/**
 * Allows QueryComponent classes to pass message to table component
 * Table component will render the result
 */
export class DisplayService {
  private empty: Display = {
    title: '',
    head: [],
    data: []
  };
  private displayMessage = new BehaviorSubject(this.empty);
  public sharedMessage = this.displayMessage.asObservable();

  constructor() { }

  nextDisplayMessage(message: Display) {
    this.displayMessage.next(message);
  }

  mapToDisplay(title: string, data: Response<any>): Display {
    let display: Display = {
      title: '',
      head: [''],
      data: []
    }
    display.title = title;
    display.head = data.head.vars;
    display.data = data.results.bindings;
    return display;
  }
}
