import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  formElement: FormGroup;
  title = "codementor-form-test";

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formElement = new FormGroup({
      messageType: new FormControl(null),
      aircraftId: new FormControl(null),
      ssrMode: new FormControl(null),
      code: new FormControl(null),
      flightRules: new FormControl(null),
      typeOfFlight: new FormControl(null),
      airCraftNumber: new FormControl(null),
      aircraftType: new FormControl(null),
      wakeTurbulenceType: new FormControl(null),
      comNav: new FormControl(null),
      aidEquipment: new FormControl(null),
      depAero: new FormControl(null),
      cruisingSpeed: new FormControl(null),
      cruisingLevel: new FormControl(null),
      route: new FormControl(null),
      dstAero: new FormControl(null),
      altAerodrone: new FormControl(null),
      otherInfo: new FormControl(null),
    });
  }

  submitForm(): void {
    const { value } = this.formElement;
    document.write(`<h4>Values</h4><br>
    <p>MessageType: ${value.messageType}</p>
    <p>AircraftId: ${value.aircraftId}</p>
    <p>SSRMode: ${value.ssrMode}<p>
    <p>Code: ${value.code}</p>
    <p>FlightRules: ${value.flightRules}</p>
    <p>TypeOfFlight: ${value.typeOfFlight}</p>
    <p>AirCraftNumber: ${value.airCraftNumber}</p>
    <p>AircraftType: ${value.aircraftType}</p>
    <p>WakeTurbulenceType: ${value.wakeTurbulenceType}</p>
    <p>comNav: ${value.comNav}</p>
    <p>AidEquipment: ${value.aidEquipment}</p>
    <p>DepAero: ${value.depAero}</p>
    <p>CruisingSpeed: ${value.cruisingSpeed}</p>
    <p>CruisingLevel: ${value.cruisingLevel}</p>
    <p>Route: ${value.route}</p>
    <p>DstAero: ${value.dstAero}</p>
    <p>AltAerodrone: ${value.altAerodrone}<p>
    <p>otherInfo: ${value.otherInfo}</p>`);
  }

  clearForm(): void {
    this.formElement.reset();
  }

  printForm(): void {
    window.print();
  }
}
