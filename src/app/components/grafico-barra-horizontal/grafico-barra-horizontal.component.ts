import {Component, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
  // con @Input lo usamos para obtener los datos del componente padre
  // inicio.component.ts

  @Input() results: any[] = [];
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  yAxisLabel = 'Juegos';
  showYAxisLabel = true;
  xAxisLabel = 'Votos';
  colorScheme = 'nightLights';

  constructor() {}

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  ngOnDestroy(): void {

  }
}
