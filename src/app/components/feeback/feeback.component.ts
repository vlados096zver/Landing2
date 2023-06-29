import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-feeback',
  templateUrl: './feeback.component.html',
  styleUrls: ['./feeback.component.scss']
})
export class FeebackComponent {
  @Input() item: any;
}
