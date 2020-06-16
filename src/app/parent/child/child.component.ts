import { Component, Input, AfterViewInit ,EventEmitter,Output} from '@angular/core';
import { Checkbox } from '../checkbox';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterViewInit {
  title = 'sample-app';
  visible = true;

  @Input() checkboxstatus :Checkbox[];
  @Input() buttonText :string;
  ngAfterViewInit()
  {
      console.log("checkking"+this.checkboxstatus.values);
  }
  addItem()
  {
    
  }
}