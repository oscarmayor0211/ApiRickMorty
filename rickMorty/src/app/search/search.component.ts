import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../models/character.model';
import { ListCardComponent } from '../list-card/list-card.component';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  info : any ='';

  constructor(public infoServ : InfoService){}
  send(): void{
    this.infoServ.callback.emit(this.info);
  }
}
