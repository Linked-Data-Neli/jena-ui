import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {Response} from '../api-response/Response';
import { Query1Response } from '../api-response/Query1Response';
import { JenaService } from '../jena.service';

@Component({
  selector: 'app-query1',
  templateUrl: './query1.component.html',
  styleUrls: ['./query1.component.css']
})
export class Query1Component implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private jenaService: JenaService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })
  }

  onSubmit() {
    this.jenaService.getQuery1Response(this.form.get('firstName').value, this.form.get('lastName').value)
                    .subscribe(
                      data => {
                        console.log('Data', data);
                      },
                      error => console.log('Done goofed son', error)
                    )
  }
}
