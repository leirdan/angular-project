import {Component} from "@angular/core"

@Component({
  selector: "card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  title = "Phantasy Star I"
  description = `Jogo de RPG 8-bits lançados nos anos 1980, foi uma completa revolução na maneira de se fazer RPGs, mas que hoje não é muito
    conhecido :(`
}
