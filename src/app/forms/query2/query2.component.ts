import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JenaService } from '../jena.service';
import { DisplayService } from 'src/app/display.service';

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css']
})
export class Query2Component implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder,
    private jenaService: JenaService,
    private displayService: DisplayService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      courseId: ['', Validators.required]
    })
  }

  onSubmit() {
    let courseId = this.form.get('courseId').value;
    this.jenaService.getQuery2Response(courseId)
                    .subscribe(
                      data => {
                        console.log('Data in course details comp', data);
                        let title = this.displayService.getDisplayTitle(data,
                          `${courseId}'s Details`,
                          `No Details found for ${courseId}`);

                        for(let res of data.results.bindings) {
                          if(res.prerequisite) {
                            let preReq = res.prerequisite.value;
                            if(preReq) {
                              preReq = preReq.split("#")[1];
                              res.prerequisite.value = preReq;
                            }
                          }
                        }

                        let display = this.displayService.mapToDisplay(title, data);
                        this.displayService.nextDisplayMessage(display);
                      },
                      error => console.log('Done goofed', error)
                    )
  }

}
