import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BadgeComponent} from "./badge/badge.component";
import {LabelComponent} from "./label/label.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BadgeComponent, LabelComponent]
})
export class GeneralModule {}
