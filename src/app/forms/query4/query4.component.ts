import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JenaService } from '../jena.service';
import { DisplayService } from 'src/app/display.service';

@Component({
  selector: 'app-query4',
  templateUrl: './query4.component.html',
  styleUrls: ['./query4.component.css']
})
export class Query4Component implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder,
    private jenaService: JenaService,
    private displayService: DisplayService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      bookName: ['', Validators.required]
    })
  }

  onSubmit() {
    let bookName = this.form.get('bookName').value;
    this.jenaService.getQuery4Response(bookName)
                    .subscribe(
                      data => {
                        console.log('Data in book details comp', data);
                        let title = this.displayService.getDisplayTitle(data,
                          `${bookName}'s Details`,
                          `No Details found for ${bookName}`);

                        let display = this.displayService.mapToDisplay(title, data);
                        this.displayService.nextDisplayMessage(display);
                      },
                      error => console.log('Done goofed', error)
                    )
  }
}
