import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;
  public valorAltura: string = "20px";
  public corFundo: string = "yellow";

  public nome: string = "";
  public list: Array<{nome: string}> = [];

  public data = new Date();
  constructor() {}

  ngOnInit(): void {
    setInterval( ()=>{
      if(this.valor) {
        this.valor = false;
      } else {
        this.valor = true;
      }

      if(this.valorAltura == "20px") {
        this.valorAltura = "50px";
        this.corFundo = "green";
      } else {
        this.valorAltura = "20px";
        this.corFundo = "yellow";
      }
    }, 2000)
  }

  public salvar() {
    this.list.push({nome: this.nome});
    this.nome = "";
  }
}
