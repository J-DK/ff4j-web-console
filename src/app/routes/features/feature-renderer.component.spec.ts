import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FeatureCardModule } from '../../shared/components/feature-card/feature-card.module';
import { FeatureRendererComponent } from './feature-renderer.component';
import { LoggerTestingModule } from 'ngx-logger/testing';

describe('FeatureRendererComponent', () => {
  let component: FeatureRendererComponent;
  let fixture: ComponentFixture<FeatureRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FeatureCardModule, LoggerTestingModule],
      declarations: [FeatureRendererComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureRendererComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should always return false for ag-grid refresh', () => {
    expect(component.refresh(null)).toBeFalsy();
  });
});