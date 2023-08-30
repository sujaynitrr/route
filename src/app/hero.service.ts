import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  getHero(id: any) {
    console.log(id, 'id');
  }
}
