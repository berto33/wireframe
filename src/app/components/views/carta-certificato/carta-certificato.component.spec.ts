import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaCertificatoComponent } from './carta-certificato.component';

describe('CartaCertificatoComponent', () => {
  let component: CartaCertificatoComponent;
  let fixture: ComponentFixture<CartaCertificatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaCertificatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaCertificatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
