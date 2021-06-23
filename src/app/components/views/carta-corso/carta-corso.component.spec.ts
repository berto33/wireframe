import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaCorsoComponent } from './carta-corso.component';

describe('CartaCorsoComponent', () => {
  let component: CartaCorsoComponent;
  let fixture: ComponentFixture<CartaCorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaCorsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaCorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
