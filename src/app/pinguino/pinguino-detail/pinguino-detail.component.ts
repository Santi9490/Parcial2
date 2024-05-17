import { Component, Input, OnInit } from '@angular/core';
import { Pinguino } from '../pinguino';
import { ActivatedRoute } from '@angular/router';
import { PinguinoService } from '../pinguino.service';

@Component({
  selector: 'app-paciente-detail',
  templateUrl: './pinguino-detail.component.html',
  styleUrls: ['./pinguino-detail.component.css']
})
export class PinguinoDetailComponent implements OnInit {
  pinguinoId !: string;
  @Input() pinguino!: Pinguino;
  

  constructor(
    private route: ActivatedRoute,
    private pinguinoService: PinguinoService
  ) {}
 
  getPinguino(id: string): void {
    this.pinguinoService.getPinguinos().subscribe((pinguinos) => {
      this.pinguino= pinguinos.find(pinguino2 => pinguino2.id === id)!;
    }
    );
  }
 
  ngOnInit() {
    if(this.pinguino === undefined){
      this.pinguinoId = this.route.snapshot.paramMap.get('id')!
      if (this.pinguinoId) {
        this.getPinguino(this.pinguinoId);
      }
    }
  }
 }
