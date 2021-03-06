import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiBase:string = environment.apiBase;

  constructor(private http:HttpClient) { }

  getHeroes(){
    return this.http.get<Heroe[]>(`${this.apiBase}/heroes`)
  }

  getHeroeByID(id:string){
    return this.http.get<Heroe>(`${this.apiBase}/heroes/${id}`)
  }

  getSugerencias(termino:string){
    return this.http.get<Heroe[]>(`${this.apiBase}/heroes?q=${termino}&_limit=6`)
  }

  createHeroe(heroe:Heroe){
    return this.http.post<Heroe>(`${this.apiBase}/heroes`,heroe)
  }

  updateHeroe(heroe:Heroe){
    return this.http.put<Heroe>(`${this.apiBase}/heroes/${heroe.id}`,heroe)
  }

  deleteHeroe(id:string){
    return this.http.delete<{}>(`${this.apiBase}/heroes/${id}`)
  }
}
