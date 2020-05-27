import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  termino: string;
  heroes: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const { termino } = params;

      this.termino = termino;
      this.heroes = this.heroesService.buscarHeroes(termino);
    });
  }
}
