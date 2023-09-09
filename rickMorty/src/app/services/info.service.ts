import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InfoService {
  
  public url: string = 'https://rickandmortyapi.com/api/'
  public page = 1;
  public idCharacter = 1;
  callback: EventEmitter<any> = new EventEmitter<any>();
  callback2: EventEmitter<any> = new EventEmitter<any>();

  constructor( private http: HttpClient) { }
  getAllCharacters(): Observable<any> {
    return this.http.get(`${this.url}character/?page=${this.page}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.url}character/${id}`)
  }

  getLocation(): Observable<any> {
    return this.http.get(`${this.url}location`)
  }
 
  getEpisodeById(id: number): Observable<any> {
    console.log(id);
    
    return this.http.get(`${this.url}episode/${id}`)
  }

}
