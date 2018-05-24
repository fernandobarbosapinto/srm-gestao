import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntRecebiveisComponent } from './ant-recebiveis.component';

describe('AntRecebiveisComponent', () => {
  let component: AntRecebiveisComponent;
  let fixture: ComponentFixture<AntRecebiveisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntRecebiveisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntRecebiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
