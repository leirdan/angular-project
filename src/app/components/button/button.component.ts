import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.css'],
})
export class ButtonComponent {
  @Input() btnLabel: string = '';
  btnClass: string = 'btn';
  @Input() linkButton: string = '';
}
