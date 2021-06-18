import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apollo,gql } from 'apollo-angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {
  
  productos: Productos[] = [
    { 'idsku' : 841705311 },
    { 'idsku' : 841725353 },
    { 'idsku' : 841725392 },
    { 'idsku' : 841725437 },
    { 'idsku' : 841725449 },
    { 'idsku' : 841725560 },
    { 'idsku' : 841726036 },
    { 'idsku' : 841726846 },
    { 'idsku' : 841725299 },
    { 'idsku' : 841725389 },
    { 'idsku' : 841725394 },
    { 'idsku' : 841725519 },
    { 'idsku' : 841725602 },
    { 'idsku' : 841725812 },
    { 'idsku' : 841725815 },
    { 'idsku' : 841725900 },
    { 'idsku' : 841726024 },
    { 'idsku' : 841726240 },
    { 'idsku' : 841727016 },
    { 'idsku' : 841727431 },
    { 'idsku' : 841728121 },
    { 'idsku' : 841725694 },
    { 'idsku' : 841726034 },
    { 'idsku' : 841727432 },
    { 'idsku' : 841726785 },
    { 'idsku' : 841726937 },
    { 'idsku' : 841727006 },
    { 'idsku' : 841727613 },
    { 'idsku' : 841725459 },
    { 'idsku' : 841725569 },
    { 'idsku' : 841727596 },
    { 'idsku' : 841728134 },
    { 'idsku' : 841728570 },
    { 'idsku' : 841728912 },
    { 'idsku' : 841726097 },
    { 'idsku' : 841727838 },
    { 'idsku' : 841727852 },
    { 'idsku' : 841728667 },
    { 'idsku' : 841728875 },
    { 'idsku' : 841728908 },
    { 'idsku' : 841728915 },
    { 'idsku' : 841728937 },
    { 'idsku' : 841728938 },
    { 'idsku' : 67554023 },
    { 'idsku' : 841725556 },
    { 'idsku' : 841726020 },
    { 'idsku' : 841726046 },
    { 'idsku' : 841726085 },
    { 'idsku' : 841726162 },
    { 'idsku' : 841726231 },
    { 'idsku' : 841726783 },
    { 'idsku' : 841726825 },
    { 'idsku' : 841726834 },
    { 'idsku' : 841726931 },
    { 'idsku' : 841727474 },
    { 'idsku' : 841727804 },
    { 'idsku' : 841727848 },
    { 'idsku' : 841727869 },
    { 'idsku' : 841727905 },
    { 'idsku' : 841728095 },
    { 'idsku' : 841728132 },
    { 'idsku' : 841728243 },
    { 'idsku' : 841728580 },
    { 'idsku' : 841728584 },
    { 'idsku' : 841728778 },
    { 'idsku' : 841728859 },
    { 'idsku' : 841725364 },
    { 'idsku' : 841726051 },
    { 'idsku' : 841726805 },
    { 'idsku' : 841727587 },
    { 'idsku' : 841725651 },
    { 'idsku' : 841728287 },
    { 'idsku' : 841725595 },
    { 'idsku' : 841726316 },
    { 'idsku' : 841726514 },
    { 'idsku' : 841726515 },
    { 'idsku' : 841726516 },
    { 'idsku' : 672683751 },
    { 'idsku' : 675515551 },
    { 'idsku' : 841725356 },
    { 'idsku' : 841725381 },
    { 'idsku' : 841725384 },
    { 'idsku' : 841725454 },
    { 'idsku' : 841725455 },
    { 'idsku' : 841725616 },
    { 'idsku' : 841725693 },
    { 'idsku' : 841725736 },
    { 'idsku' : 841725980 },
    { 'idsku' : 841726032 },
    { 'idsku' : 841726107 },
    { 'idsku' : 841726127 },
    { 'idsku' : 841726133 },
    { 'idsku' : 841726782 },
    { 'idsku' : 841726790 },
    { 'idsku' : 841726889 },
    { 'idsku' : 841727163 },
    { 'idsku' : 841727199 },
    { 'idsku' : 841727429 },
    { 'idsku' : 841727433 },
    { 'idsku' : 841727435 }
  ];
  respuesta: Respuesta[]=[];

  constructor(private apollo:Apollo) { }

  ngOnInit(): void {
  }
  procesa(MyForm: NgForm){

    for (let index = 0; index < 10; index++) {
      let tinka = this.getNumeroaleatorio(100);
      let sugo = gql `query{
        maxmin(idsku: ${this.productos[tinka].idsku}, email: "${MyForm.value.email}"){
                idsku
                inventario
                maximo
                minimo
                msj
        }
      }`
      this.apollo.watchQuery<any>({
        query: sugo
      }).valueChanges.subscribe(({data,loading})=>{
        this.respuesta.push(...data.maxmin)
      })

    }
    
  }
  getNumeroaleatorio(x:number){
    return Math.floor(Math.random()*(x+1));;
  }


}
interface Productos {
  idsku: number;
}
interface Respuesta {
  idsku: number
  inventario: number
  maximo:number
  minimo: number
  msj:string
}
