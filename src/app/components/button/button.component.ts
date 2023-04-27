import {Component} from "@angular/core";

@Component({
  selector: "btn",
  templateUrl: "button.component.html",
  styleUrls: ["button.component.css"]
})
export class ButtonComponent {
  btnText: string = "ACESSAR"
   btnClass: string = "btn"
}
