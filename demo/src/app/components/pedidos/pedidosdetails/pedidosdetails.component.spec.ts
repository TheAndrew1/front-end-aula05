import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosdetailsComponent } from './pedidosdetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { Produto } from 'src/app/models/produto';
import { By } from '@angular/platform-browser';

describe('PedidosdetailsComponent', () => {
  let component: PedidosdetailsComponent;
  let fixture: ComponentFixture<PedidosdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosdetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PedidosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {  //MOCK
    let pedido = new Pedido();
    pedido.id = 1;
    pedido.obs = "Pizza";
    pedido.produtos = new Array<Produto>();
    component.pedido = pedido;
    fixture.detectChanges();  //REFRESH
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teste 01 Input com interpolação', () => {
    let element = fixture.debugElement.query(By.css("input[name='exampleInputText1']"));
    expect(element.nativeElement.ngModel).toEqual("Pizza");
  });
});
