import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(conversaciones: any[], filter: Object): any {
    if (!conversaciones || !filter) {
      return conversaciones;
    }

    return conversaciones.filter(
      (s) =>
          s.nombre.toLowerCase().includes(filter)
    );
  }

}
