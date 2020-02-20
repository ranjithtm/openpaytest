import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap, first } from "rxjs/operators";
import { LaunchDetailsGQL } from "../services/spacexGraphql.service";
import { LaunchDetailsService } from "../services/launch-details.service";
import { Store } from "@ngrx/store";
import { ApplicationState } from "../store";

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent {
  selectedUrl: string;
  launchDetails;
  launchDetailsLoading;

  constructor(
    private store: Store<ApplicationState>,
    private readonly launchDetailsFacade: LaunchDetailsService,
    private readonly route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      return this.launchDetailsFacade.loadLaunchDetails(params["id"]);
    });

    this.launchDetails = this.store.select(state => {
      try {
        this.selectedUrl = state.launchDetails.data.links.flickr_images[0];
      } catch (e) {
        this.selectedUrl = "assets/test.png";
      }
      return state.launchDetails.data;
    });

    this.launchDetailsLoading = this.store.select(state => {
      return state.launchDetails.loading;
    });
  }

  onBackClick() {
    history.back();
  }

  onImageClick(url) {
    this.selectedUrl = url;
  }
}
