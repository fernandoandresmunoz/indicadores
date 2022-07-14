import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatList, MatListItem, MatNavList } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';

import { IndicadoresListComponent } from './indicadores-list.component';

describe('IndicadoresListComponent', () => {
  let component: IndicadoresListComponent;
  let fixture: ComponentFixture<IndicadoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadoresListComponent , MatToolbar, MatList, MatNavList, MatListItem],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
