import { Component, Input } from "@angular/core";

@Component({
  selector: "img-component",
  templateUrl: "./img-component.html",
  styleUrls: ["./img-component.css"]
})
export class ImgComponent {
  isLoading = true;
  hasError = false;
  @Input("url") url: String;
  @Input("mission") mission: String = "";

  onImageLoad() {
    this.isLoading = false;
  }

  onImageError() {
    this.isLoading = false;
    this.hasError = true;
    this.url = "assets/test.png";
  }
}
