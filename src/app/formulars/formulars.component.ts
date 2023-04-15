import { Component } from '@angular/core';
import { FORMULARS } from "../mock-formulars";
import { Formular } from "../formular";

@Component({
  selector: 'app-formulars',
  templateUrl: './formulars.component.html',
  styleUrls: ['./formulars.component.css']
})
export class FormularsComponent {
  formulars = FORMULARS;
}
