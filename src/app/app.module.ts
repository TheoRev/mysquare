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
import { Routes, RouterModule } from "@angular/router"
import { DetalleComponent } from "./detalle/detalle.component";
import { LugaresComponent } from "./lugares/lugares.component";

const appRoutes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'detalle', component: DetalleComponent }
];
@NgModule({
  declarations: [AppComponent, ResaltarDirective, ContarClicksDirective, DetalleComponent, LugaresComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyC9qlyP05z4ah-KuGAXPkcV3JlbCUptDts"
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
