import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LaunchDetailsComponent } from "./launch-details.component";
import {
  MatSliderModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatCardModule
} from "@angular/material";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { launchEffects, launchReducers, ApplicationState } from "../store";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { GraphQLModule } from "../graphql.module";
import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutingModule } from "../app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LaunchListComponent } from "../launch-list/launch-list.component";
import { ImgComponent } from "../img-component/img-component";
import { provideMockStore } from "@ngrx/store/testing";

describe("LaunchDetailsComponent", () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchListComponent, ImgComponent, LaunchDetailsComponent],
      imports: [
        RouterTestingModule,
        AppRoutingModule,
        GraphQLModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        StoreModule.forRoot(launchReducers),
        EffectsModule.forRoot(launchEffects),
        StoreDevtoolsModule.instrument(),
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSliderModule
      ],
      providers: [
        provideMockStore<ApplicationState>({
          initialState: {
            launchDetails: {
              data: null
            },
            launchList: {
              data: null
            }
          }
        })
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
