import { launchReducers } from "./store/reducers/index";
import { launchEffects } from "./store/effects/index";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LaunchListComponent } from "./launch-list/launch-list.component";
import { LaunchDetailsComponent } from "./launch-details/launch-details.component";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { RelativeTimePipe } from "./core/helpers/pipes/relative-time/relative-time.pipe";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ImgComponent } from "./img-component/img-component";
import {
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSliderModule,
  MatCard
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    LaunchListComponent,
    LaunchDetailsComponent,
    RelativeTimePipe
  ],
  imports: [
    BrowserModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
