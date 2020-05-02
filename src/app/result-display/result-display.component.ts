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
            let entries = Object.entries(d);

            for(let i = 0; i < entries.length; i++) {
              let [key, value] = entries[i];
              let bo = <BindingObject>value;
              let val = bo.value;
              let entry = {key, val};

              if(entry.key === message.head[i]) {
                bindings.push(entry);
              } else {
                // if row key doesn't match thead key
                // push empty val and keep iterating to fill in blank spots
                for(let j = i; j < message.head.length; j++) {
                  if(entry.key === message.head[j]) {
                    bindings.push(entry);
                    break;
                  } else {
                    let str = '';
                    let empty = {key, str}
                    bindings.push(empty);
                  }
                }
              }
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
