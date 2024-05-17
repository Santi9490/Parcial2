import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinguinoListComponent } from './pinguino-list/pinguino-list.component';
import { PinguinoDetailComponent } from './pinguino-detail/pinguino-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PinguinoListComponent, PinguinoDetailComponent],
  exports: [PinguinoListComponent]
})
export class PinguinoModule { }
