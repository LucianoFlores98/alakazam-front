import { Subject } from "rxjs";

//Creamos un canal de comunicación, usamos algunos metodos y POO
export class SubjectManager {
  subject$ = new Subject(); //Le asignamos un $ al final a toda variable que sea asíncrono
  
  getSubject(){
    return this.subject$.asObservable();
  }

  //ver tipo para typescript
  setSubject(value: string | boolean){
    this.subject$.next(value);
  }

}