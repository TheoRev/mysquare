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
import { Routes, RouterModule } from "@angular/router";
import { DetalleComponent } from "./detalle/detalle.component";
import { LugaresComponent } from "./lugares/lugares.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { LugaresService } from "./services/lugares.service";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

const appRoutes: Routes = [
  { path: "", component: LugaresComponent },
  { path: "lugares", component: LugaresComponent },
  { path: "detalle/:id", component: DetalleComponent },
  { path: "contacto", component: ContactoComponent }
];
export const firebaseConfig = {
  apiKey: "AIzaSyCXjUBvh8ydCdeTir3MaabAnFTtzYZPVyI",
  authDomain: "mysquare-1506898395188.firebaseapp.com",
  databaseURL: "https://mysquare-1506898395188.firebaseio.com",
  storageBucket: "mysquare-1506898395188.appspot.com",
  messagingSenderId: "96306463712"
};
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyC9qlyP05z4ah-KuGAXPkcV3JlbCUptDts"
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule {}
