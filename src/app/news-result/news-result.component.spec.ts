import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsResultComponent } from './news-result.component';

describe('NewsResultComponent', () => {
  let component: NewsResultComponent;
  let fixture: ComponentFixture<NewsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
