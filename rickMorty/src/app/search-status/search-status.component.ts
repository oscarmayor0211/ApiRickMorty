import { Component } from '@angular/core';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-search-status',
  templateUrl: './search-status.component.html',
  styleUrls: ['./search-status.component.css']
})
export class SearchStatusComponent {
  constructor(private infoService: InfoService) { }

  send(info:any): void{
    this.infoService.callback2.emit(info);
  }
}
