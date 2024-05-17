import { Component, OnInit } from '@angular/core';
import { Pinguino } from '../pinguino';
import { PinguinoService } from '../pinguino.service';

@Component({
  selector: 'app-pinguino-list',
  templateUrl: './pinguino-list.component.html',
  styleUrls: ['./pinguino-list.component.css']
})
export class PinguinoListComponent implements OnInit {

  pinguinos: Array<Pinguino> = []; 
  masPresencia: string = "";
  selected: Boolean = false;
  selectedPinguino!: Pinguino;
  
  constructor(private pinguinoService: PinguinoService) { }

  ngOnInit() {
    this.getPinguinos();
    this.getPinguinoMasPresenciaMundial();

  }

  getPinguinos(): void {
    this.pinguinoService.getPinguinos().subscribe((pinguinos) => {
      this.pinguinos = pinguinos;
    });
  }

  getPinguinoMasPresenciaMundial(): void {
    this.pinguinoService.getPinguinos().subscribe((pinguinos) => {
      let max = 0;
      let Hash = new Map<string, Map<string, number>>();

      for (let pinguino of pinguinos) {
        if (Hash.has(pinguino.global_distribution)) {
          let value = Hash.get(pinguino.global_distribution);
          if (value) {
            value.set(pinguino.name, (value.get(pinguino.name) || 0) + 1);
          }
        } else {
          let value = new Map<string, number>();
          value.set(pinguino.name, 1);
          Hash.set(pinguino.global_distribution, value);
        }
      } 
      for (let [key, value] of Hash) {
        for (let [key2, value2] of value) {
          if (value2 > max) {
            max = value2;
            this.masPresencia = key2;
          }
        }
      }
    });

      
    
  }

  onSelected(pinguino: Pinguino): void {
    this.selected = true;
    this.selectedPinguino = pinguino;
  }
}

