import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAseguradosComponent } from './lista-asegurados.component';

describe('ListaAseguradosComponent', () => {
  let component: ListaAseguradosComponent;
  let fixture: ComponentFixture<ListaAseguradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaAseguradosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaAseguradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
