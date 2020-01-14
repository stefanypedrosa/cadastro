import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListartudoComponent } from './listartudo.component';

describe('ListartudoComponent', () => {
  let component: ListartudoComponent;
  let fixture: ComponentFixture<ListartudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListartudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListartudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
