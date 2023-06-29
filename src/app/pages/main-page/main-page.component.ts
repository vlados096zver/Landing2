import {Component} from '@angular/core';
import {forkJoin} from "rxjs";
import {RequestsService} from "../../services/requests.service";
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent  {

  public data$: any = [];

  constructor(
    public requestsService: RequestsService
  ) {
    forkJoin([
      this.requestsService.getBlogPost(),
      this.requestsService.getTeam(),
    ]).subscribe({
      next: (res: any)=> {
        this.data$ = res;
      }
    })
  }


}
