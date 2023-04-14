import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathBrowseComponent } from './math-browse.component';

describe('MathBrowseComponent', () => {
  let component: MathBrowseComponent;
  let fixture: ComponentFixture<MathBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathBrowseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
