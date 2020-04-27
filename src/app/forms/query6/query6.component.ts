import { Component, OnInit } from '@angular/core';
import { JenaService } from '../jena.service';
import { DisplayService } from 'src/app/display.service';

@Component({
  selector: 'app-query6',
  templateUrl: './query6.component.html',
  styleUrls: ['./query6.component.css']
})
export class Query6Component implements OnInit {
  private noOpt = "---";
  options: string[] = [];

  constructor(private jenaService: JenaService,
              private displayService: DisplayService) { }

  ngOnInit(): void {
    this.options.push(this.noOpt);
    this.options.push("2018");
    this.options.push("2019");
  }

  onSelect(option: string) {
    if(option != this.noOpt) {
        this.jenaService.getQuery6Response(parseInt(option))
            .subscribe(
              data => {
                console.log("Data in query6 component", data);
                let title = this.displayService.getDisplayTitle(data,
                              `Students graduated ${option}`,
                              `No results found for year ${option}`);
                let display = this.displayService.mapToDisplay(title, data);
                this.displayService.nextDisplayMessage(display);
              },
              error => console.error("Done goofed son"));
    }
  }
}
