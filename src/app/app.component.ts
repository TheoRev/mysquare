import { Component } from "@angular/core";
import { SelectItem } from "primeng/primeng";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "MySquare";
  listo = true;

  cities: SelectItem[];
  public selectedCity: string;

  lat: number = -16.4331647;
  lng: number = -71.5427211;

  lugares: any = [
    {
      plan: "pagado",
      cercania: 1,
      distancia: 1,
      active: true,
      nombre: "Florería la Gardenia"
    },
    {
      plan: "gratuito",
      cercania: 1,
      distancia: 1.8,
      active: true,
      nombre: "Donas la pasadita"
    },
    {
      plan: "gratuito",
      cercania: 2,
      distancia: 5,
      active: true,
      nombre: "Veterinaria Huellitas Felices"
    },
    {
      plan: "gratuito",
      cercania: 3,
      distancia: 10,
      active: false,
      nombre: "Sushi Suhiroll"
    },
    {
      plan: "pagado",
      cercania: 3,
      distancia: 35,
      active: true,
      nombre: "Hotel la Gracia"
    },
    {
      plan: "gratuito",
      cercania: 3,
      distancia: 120,
      active: false,
      nombre: "Zapatería el Clavo"
    }
  ];

  constructor() {
    setTimeout(() => {
      this.listo = false;
    }, 3000);

    this.cities = [];
    this.cities.push({ label: "Select City", value: null });
    this.cities.push({
      label: "New York",
      value: { id: 1, name: "New York", code: "NY" }
    });
    this.cities.push({
      label: "Rome",
      value: { id: 2, name: "Rome", code: "RM" }
    });
    this.cities.push({
      label: "London",
      value: { id: 3, name: "London", code: "LDN" }
    });
    this.cities.push({
      label: "Istanbul",
      value: { id: 4, name: "Istanbul", code: "IST" }
    });
    this.cities.push({
      label: "Paris",
      value: { id: 5, name: "Paris", code: "PRS" }
    });
  }

  hacerAlgo() {
    alert("Hola!!");
  }

  onChange() {
    console.log(this.selectedCity);
  }
}
