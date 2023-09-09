import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../services/info.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent {
  ids : any ;
  characters : any;
  constructor(private route : ActivatedRoute, private infoServi : InfoService){
   this.ids = this.route.snapshot.paramMap.get('id');
   this.getEpisodesById(this.ids);
  }

  getEpisodesById(id : any){
    id = this.route.snapshot.paramMap.get('id');    
    this.infoServi.getEpisodeById(id).subscribe((res:any) =>{
      this.characters = res;
    })
  }
}
