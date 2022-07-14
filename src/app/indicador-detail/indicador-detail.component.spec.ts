import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatList, MatListItem } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';

import { IndicadorDetailComponent } from './indicador-detail.component';

describe('IndicadorDetailComponent', () => {
  let component: IndicadorDetailComponent;
  let fixture: ComponentFixture<IndicadorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadorDetailComponent, MatToolbar, MatList, MatListItem ],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
