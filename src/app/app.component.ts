import { Component, OnInit } from '@angular/core';

/*<app-diretivas-estruturais>
<app-data-binding></app-data-binding>*/

@Component({
  selector: 'app-root',
  template: `
    <!--<app-diretivas-atributos>
      <h1>Aulas Diretivas Atributo</h1>
      <h3>Acaba aqui o NgContent</h3>
    </app-diretivas-atributos>-->
    <!--<app-diretivas-atributos>-->
    <!--<app-new-component></app-new-component>-->
    <app-input [contador]="addValue"></app-input>
    <br>
    <button (click)="add()">Add</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  
  public addValue: number = 0;
  constructor(){}

  ngOnInit(): void {
    setTimeout( ()=> {
      console.log(1);
    }, 5000);
  }

  public add() {
    this.addValue += 1;
  }

}
