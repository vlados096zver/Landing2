import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() item: any;
  @Output() onOpen: EventEmitter<any> = new EventEmitter();
}
