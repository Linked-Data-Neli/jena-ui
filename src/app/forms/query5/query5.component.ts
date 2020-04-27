import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JenaService } from '../jena.service';
import { DisplayService } from 'src/app/display.service';

@Component({
  selector: 'app-query5',
  templateUrl: './query5.component.html',
  styleUrls: ['./query5.component.css']
})
export class Query5Component implements OnInit {

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
    this.jenaService.getQuery5Response(firstName, lastName)
                    .subscribe(
                      data => {
                        console.log('Data in query component', data);
                        let title = this.displayService.getDisplayTitle(data,
                                        `Events attended by ${firstName + ' ' + lastName}`,
                                        `No events found for ${firstName + ' ' + lastName}`);
                        // format to get enrolled data shorter
                        for(let res of data.results.bindings) {
                          let attends = res.Attends.value;
                          if(attends) {
                            attends = attends.split("#")[1];
                            res.Attends.value = attends;
                          }
                        }
                        let display = this.displayService.mapToDisplay(title, data);
                        this.displayService.nextDisplayMessage(display);
                      },
                      error => console.log('Done goofed son', error)
                    )
  }
}
