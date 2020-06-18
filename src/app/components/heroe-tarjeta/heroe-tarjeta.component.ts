import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css'],
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() hero: any = {};
  @Input() index: number;
  // @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    // this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {}

  verHeroe() {
    /* Aqui llego despues del click y el va a la ruta del Path,
    que recoje la ruta y el id, tuve que importar el router para utilizar
    su metodo navigate */
    this.router.navigate(['/heroe', this.index]);

    /* PARA VER COMO FUNCIONA EL OUTPUT */
    /* El Evento Que Se Va HA Emitir Desde El Componente Hijo Hacia El Padre,
    Con El Contenido Que Va A Emitir */
    // this.heroeSeleccionado.emit(this.index);
  }
}
