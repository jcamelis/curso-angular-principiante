import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  @Input() titulo: string = "";
  @Output() evento : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  entrar(): void {
    this.evento.emit();
  }
}
