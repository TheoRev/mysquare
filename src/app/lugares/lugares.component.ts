import { Component } from "@angular/core";
import { SelectItem } from "primeng/primeng";
import { LugaresService } from "../services/lugares.service";

@Component({
  selector: "app-lugares",
  templateUrl: "./lugares.component.html"
})
export class LugaresComponent {
  title = "MySquare";

  lat: number = -16.4331647;
  lng: number = -71.5427211;

  lugares = null;

  constructor(private lugaresService: LugaresService) {
    this.lugares = lugaresService.getLugares();
  }
}
