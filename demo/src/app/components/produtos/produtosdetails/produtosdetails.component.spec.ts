import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosdetailsComponent } from './produtosdetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { By } from '@angular/platform-browser';

describe('ProdutosdetailsComponent', () => {
  let component: ProdutosdetailsComponent;
  let fixture: ComponentFixture<ProdutosdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosdetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ProdutosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {  //MOCK
    let produto = new Produto();
    produto.id = 1;
    produto.nome = "Pizza";
    produto.valor = 17.00;
    component.produto = produto;
    fixture.detectChanges();  //REFRESH
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teste 01 Input com interpolação', () => {
    let element = fixture.debugElement.query(By.css("input[name='exampleInputText1']"));
    expect(element.nativeElement.ngModel).toEqual("Pizza");
  });

  it('Teste 02 Input com interpolação', () => {
    let element = fixture.debugElement.query(By.css("input[name='exampleInputText1']"));
    expect(element.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste 03 Input com interpolação', () => {
    let element = fixture.debugElement.query(By.css("input[name='exampleInputPassword1']"));
    expect(element.nativeElement.ngModel).toEqual(17.00);
  });
});
