import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { provideMockStore } from "@ngrx/store/testing";
import { LaunchListComponent } from "./launch-list.component";
import { ImgComponent } from "../img-component/img-component";
import {
  MatSliderModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatCardModule
} from "@angular/material";
import { AppRoutingModule } from "../app-routing.module";
import { LaunchDetailsComponent } from "../launch-details/launch-details.component";
import { RouterTestingModule } from "@angular/router/testing";
import { GraphQLModule } from "../graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { launchReducers, launchEffects, ApplicationState } from "../store";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

describe("LaunchListComponent", () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;
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
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
