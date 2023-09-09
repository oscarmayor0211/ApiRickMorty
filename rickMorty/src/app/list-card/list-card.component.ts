import { Component, EventEmitter, Output } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Character } from '../models/character.model';
import { Modal } from 'bootstrap';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent {
  character: any[] = [];
  testModal: Modal | undefined;
  pagination: any = {
    total: 0,
    pages: 0,
    currentPage: 1,
  };
  filter: string = '';
  filterStatus: string = '';

  arrayPages: any = [];
  characters: any = {
    name: '',
    image: '',
    status: '',
    origin: {
      name: ""
    }
  };

  constructor(private infoServi: InfoService, private route : ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));

   }

  ngOnInit(): void {
    this.getAllListCard();
    this.getLocation;
    this.getPersonajesFilter();
    this.getStatusFilter();
  }

  getPersonajesFilter() {
    this.infoServi.callback.subscribe((response: any) => {
      this.filter = response;
    });
  }

  getStatusFilter(){
    this.infoServi.callback2.subscribe((response: any) => {
      this.filterStatus = response;
    });
  }

  getLocation() {
    this.infoServi.getLocation().subscribe((s: any) => {
    })
  }

  getAllListCard() {
    this.infoServi.getAllCharacters().subscribe((caricaturas: any) => {
      this.character = caricaturas.results;
      this.pagination.pages = caricaturas.info.pages;
      this.page(this.pagination.pages);
      this.pagination.total = caricaturas.results.length;
      console.log(caricaturas);
      
    })
  }

  openModal(id: any): void {
    this.infoServi.idCharacter = id;
    this.infoServi.getById(id).subscribe((response: any) => {
      this.characters = response;
    });
    let el_testModal = document.getElementById('myModal');
    if (el_testModal) {
      this.testModal = new Modal(el_testModal, {
        keyboard: true,
      });
    }
    this.testModal?.show();
  }


  page(pages: number): void {
    this.arrayPages = [];
    for (
      let i = this.pagination.currentPage;
      i <= this.pagination.currentPage + 4;
      i++
    ) {
      this.arrayPages.push(i);
    }
  }

  nextpage(): void {
    this.infoServi.page++;
    this.pagination.currentPage++;

    this.ngOnInit();
  }

  prevpage(): void {
    this.infoServi.page--;
    this.pagination.currentPage--;

    this.ngOnInit();
  }

  updatepage(number: number): void {
    this.infoServi.page = number;
    this.pagination.currentPage = number;

    this.ngOnInit();
  }

 

}
