import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FormDisplayService } from './forms/form-display.service';
import { FormItem } from './form-item';
import { FormDirective } from './form.directive';
import { DisplayService } from './display.service';
import { Display } from './forms/Display';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(FormDirective, { static: true }) formHost: FormDirective;
  title = 'jena-ui';

  forms: FormItem[] = [];

  constructor(private formDisplayService: FormDisplayService,
              private displayService: DisplayService,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.forms = this.formDisplayService.getForms();
    this.loadForm(this.forms[0].query);
  }


  onSelect(query: string) {
    console.log(`User selected ${query}`);
    this.loadForm(query);
    this.displayService.clearDisplay();
  }

  /**
   * Using the form directive, we can dynamically inject
   * form component into the view
   * @param query 
   */
  private loadForm(query: String) {
    let form: FormItem;
    for (let selectedForm of this.forms) {
      if (selectedForm.query === query) {
        form = selectedForm;
      }
    }
    if (form) {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(form.component);
      let viewContainerRef = this.formHost.viewContainerRef;
      viewContainerRef.clear();
      viewContainerRef.createComponent(componentFactory);
    }
  }
}
