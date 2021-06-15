import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaLezioneComponent } from './pagina-lezione.component';

describe('PaginaLezioneComponent', () => {
  let component: PaginaLezioneComponent;
  let fixture: ComponentFixture<PaginaLezioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaLezioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaLezioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
