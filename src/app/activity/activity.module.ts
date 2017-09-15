import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { LoadingBarComponent } from "./loading-bar/loading-bar.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingBarComponent, LoadingSpinnerComponent]
})
export class ActivityModule {}
