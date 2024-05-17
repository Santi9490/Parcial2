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
  masDistribucion: string = "";
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
      let pinguinoMasDistribucion = "";
      for (let pinguino of pinguinos) {
        if (pinguino.global_distribution.length > max) {
          max = pinguino.global_distribution.length;
          pinguinoMasDistribucion = pinguino.name;
        }
      }
      this.masDistribucion = pinguinoMasDistribucion;
    }
    );
    
  }

  onSelected(pinguino: Pinguino): void {
    this.selected = true;
    this.selectedPinguino = pinguino;
  }
}

