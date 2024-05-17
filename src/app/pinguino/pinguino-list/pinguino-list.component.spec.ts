/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { PinguinoListComponent } from './pinguino-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Pinguino } from '../pinguino';
import { PinguinoService } from '../pinguino.service';


describe('PacienteListComponent', () => {
  let component: PinguinoListComponent;
  let fixture: ComponentFixture<PinguinoListComponent>;
  let debug: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PinguinoListComponent ],
      providers: [ PinguinoService ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(PinguinoListComponent);
    component = fixture.componentInstance;


    


    for(let i = 0; i < 10; i++) {
      const pinguino = new Pinguino(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.lorem.sentence()
        
      );
      component.pinguinos.push(pinguino);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have 10 <div.col.mb-2> elements', () => {
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(10)
  });


  it('should have 10 <card.p-2> elements', () => {
    expect(debug.queryAll(By.css('div.card.p-2'))).toHaveSize(10)
  });


  it('should have 10 <nombre> elements', () => {
    expect(debug.queryAll(By.css('nombre'))).toHaveSize(10)
  });


  it('should have 10 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
  });


  it('should have the corresponding src to the book image and alt to the pinguino name', () => {
    debug.queryAll(By.css('name')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.pinguinos[i].name)


      expect(img.attributes['alt']).toEqual(
        component.pinguinos[i].id.toString())
    })
  });


  it('should have h5 tag with the pinguino.id', () => {
    debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
      expect(h5.nativeElement.textContent).toContain(component.pinguinos[i].id)
    });
  });


});
