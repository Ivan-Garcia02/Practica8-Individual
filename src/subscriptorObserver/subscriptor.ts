import { Observer } from "./observer";
import { Observable } from "../revistaObservable/observable";
import { Revista } from "../revistaObservable/revista";

export class Subscriptor implements Observer {
  private _nombre: string;
  private _edad: number;
  private _genero: string;

  /**
   * Constructor de la clase Subscriptor
   * @param nombre Nombre del subscriptor
   * @param edad Edad del subscriptor
   * @param genero Genero del subscriptor
   */
  constructor(nombre: string, edad: number, genero: string) {
    this._nombre = nombre;
    this._edad = edad;
    this._genero = genero;
  }

  /** Getter del atributo nombre
   * @returns el nombre del subscriptor
   */
  get nombre() {
    return this._nombre;
  }
  /** Setter del atributo nombre
   * @param nombre Nombre del subscriptor
   */
  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  /** Getter del atributo edad
   * @returns la edad del subscriptor
   */
  get edad() {
    return this._edad;
  }
  /** Setter del atributo edad
   * @param edad Edad del subscriptor
   */
  set edad(edad: number) {
    this._edad = edad;
  }

  /** Getter del atributo genero
   * @returns el genero del subscriptor
   */
  get genero() {
    return this._genero;
  }
  /** Setter del atributo genero
   * @param genero Genero del subscriptor
   */
  set genero(genero: string) {
    this._genero = genero;
  }

  /**
   * Método para que cuando es invocado significa que se ha lanzado un nuevo numero de revista, en la que esta observando
   * @param observable Revista a la que observa el subscriptor
   */
  update(observable: Observable) {
    if (observable instanceof Revista) {
      console.log(`Soy un subscriptor llamado ${this._nombre} ` + `y observando la revista ${observable.nombre} ` 
                  + `se ha lanzado un nuevo numero de la revista:`);
      console.log(`Revista: ${observable.nombre}\n` + `Numero del lanzamiento: ${observable.numeroRevista}\n`
                  + `Fecha de lanzamiento: ${observable.fechaUltLanzamiento.toDateString()}\n` + `Precio: ${observable.precio}\n`)
    }
  }
}