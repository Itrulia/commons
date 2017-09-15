import {Component, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
