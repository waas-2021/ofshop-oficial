import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCompraProductoComponent } from './pagina-compra-productos.component';

describe('PaginaCompraProductoComponent', () => {
  let component: PaginaCompraProductoComponent;
  let fixture: ComponentFixture<PaginaCompraProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCompraProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCompraProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
