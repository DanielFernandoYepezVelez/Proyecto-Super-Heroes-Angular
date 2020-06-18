import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  public heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    // console.log(this.heroes);
  }

  /* EL IDX ME LO ENVIA EL HIJO CON EL @OutPut() */
  // verHeroe(idx: number) {
  //   /* Aqui llego despues del click y el va a la ruta del Path,
  //   que recoje la ruta y el id, tuve que importar el router para utilizar
  //   su metodo navigate */
  //   this.router.navigate(['/heroe', idx]);
  // }
}
