import { Component, OnInit, OnDestroy } from '@angular/core';
import { DisplayService } from '../display.service';
import { Display } from '../forms/Display';
import { BindingObject } from '../forms/api-response/Response';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {
  display: Display;
  isReadyToDisplay: boolean;

  constructor(private displayService: DisplayService) { }

  ngOnInit(): void {
    this.displayService.sharedMessage
        .subscribe(message => {
          console.log("I've got it", message);
          // extract object key,val to array for iteration in UI
          let values = [];
          for(let d of message.data) {
            let bindings = [];
            for(let [key, value] of Object.entries(d)) {
              let bo = <BindingObject>value;
              let val = bo.value;
              bindings.push({key, val});
            }
            values.push(bindings);
          }
          this.display = {title: message.title, head: message.head, data: values};
          console.log('Display', this.display);
          this.isReadyToDisplay = true;
          console.log(this.display.data)
        });
  }
}
