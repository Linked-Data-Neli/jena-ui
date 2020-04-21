import { Component, OnInit } from '@angular/core';
import { JenaService } from '../jena.service';
import { DisplayService } from 'src/app/display.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-query3',
  templateUrl: './query3.component.html',
  styleUrls: ['./query3.component.css']
})
export class Query3Component implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
    private jenaService: JenaService,
    private displayService: DisplayService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      lastName: ['', Validators.required]
    })
  }

  onSubmit() {
    let lastName = this.form.get('lastName').value;
    this.jenaService.getQuery3Response(lastName)
      .subscribe(
        data => {
          console.log('Data in course details comp', data);
          let title = this.displayService.getDisplayTitle(data,
            `${lastName}'s Details`,
            `No Details found for ${lastName}`);

  /*        for (let res of data.results.bindings) {
          if (res.prerequisite) {
            let preReq = res.prerequisite.value;
             if (preReq) {
              preReq = preReq.split("#")[1];
                res.prerequisite.value = preReq;
              }
            }
          } */

          let display = this.displayService.mapToDisplay(title, data);
          this.displayService.nextDisplayMessage(display);
        },
        error => console.log('Done goofed', error)
      )
  }


}
