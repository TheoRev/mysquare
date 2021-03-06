import { ContarClicksDirective } from "./directives/contar-clicks.directive";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

// import { ButtonModule } from "primeng/primeng";
import { DropdownModule } from "primeng/primeng";
import { AgmCoreModule } from "@agm/core";

import { AppComponent } from "./app.component";
import { ResaltarDirective } from "./directives/resaltar.directive";

@NgModule({
  declarations: [AppComponent, ResaltarDirective, ContarClicksDirective],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyC9qlyP05z4ah-KuGAXPkcV3JlbCUptDts"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
