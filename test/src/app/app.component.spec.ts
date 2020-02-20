import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { ImgComponent } from "./img-component/img-component";
import { LaunchListComponent } from "./launch-list/launch-list.component";
import { LaunchDetailsComponent } from "./launch-details/launch-details.component";
import { AppRoutingModule } from "./app-routing.module";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSliderModule
} from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { launchReducers, launchEffects } from "./store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      declarations: [
        AppComponent,
        ImgComponent,
        LaunchListComponent,
        LaunchDetailsComponent
      ]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-spacex-graphql-codegen'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("angular-spacex-graphql-codegen");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".content span").textContent).toContain(
      "angular-spacex-graphql-codegen app is running!"
    );
  });
});
