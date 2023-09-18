import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: String = "Edan";
  public idade: number = 32;
  public xuxa: boolean = false;
  public position: {x: number, y: number} = {x: 0, y: 0};

  constructor() {}

  ngOnInit(): void {} 

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
    this.xuxa = true;
  }

  public mouseMoveTeste(valor: MouseEvent) {
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
