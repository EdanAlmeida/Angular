import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit{

  public xuxa: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string }> = [
    { nome: "Edan"}, 
    { nome: "Ju"},
    { nome: "Helena"},
    { nome: "Edson"}
  ];

  public nome: string = 'edan';

  constructor() {}

  ngOnInit(): void {
    setInterval( ()=>{
      if(this.xuxa) {
        this.xuxa = false;
      } else {
        this.xuxa = true;
      }
    }, 2000)
  }

  public onClick() {
    if(this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({nome: "Lice"});
  }

  public onCLickRemoveList() {
    this.list.pop();
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }

}
