import { Component, OnInit, Query } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {Response} from '../api-response/Response';
import { Query1Response } from '../api-response/Query1Response';
import { JenaService } from '../jena.service';
import { Display } from '../Display';
import { DisplayService } from 'src/app/display.service';

@Component({
  selector: 'app-query1',
  templateUrl: './query1.component.html',
  styleUrls: ['./query1.component.css']
})
export class Query1Component implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private jenaService: JenaService,
              private displayService: DisplayService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })
  }

  onSubmit() {
    let firstName = this.form.get('firstName').value;
    let lastName = this.form.get('lastName').value;
    this.jenaService.getQuery1Response(firstName, lastName)
                    .subscribe(
                      data => {
                        console.log('Data in query component', data);
                        let title;
                        if(data.results.bindings.length > 0) {
                          title =`${firstName + ' ' + lastName}'s Details`;
                        } else {
                          title = `No Details found for ${firstName + ' ' + lastName}`;
                        }
                        // format to get enrolled data shorter
                        for(let res of data.results.bindings) {
                          let enrolled = res.enrolled.value;
                          if(enrolled) {
                            enrolled = enrolled.split("#")[1];
                            res.enrolled.value = enrolled;
                          }
                        }
                        let display = this.displayService.mapToDisplay(title, data);
                        this.displayService.nextDisplayMessage(display);
                      },
                      error => console.log('Done goofed son', error)
                    )
  }
}
