import { Observable } from "./observable";
import { Observer } from "../subscriptorObserver/observer";

export class Revista implements Observable {
  private observers: Observer[] = [];

  private _nombre: string;
  private _fechaUltLanzamiento: Date;
  private _numeroRevista: number;
  private _precio: number; 

  /**
   * Constructor de la clase Revista
   * @param nombre Nombre de la revista
   * @param fechaUltLanzamiento Fecha del ultimo lanzamiento
   * @param numeroRevista Ultimo numero de las revista
   * @param precio Precio de la revista
   */
  constructor(nombre: string, fechaUltLanzamiento: Date, numeroRevista: number, precio: number) {
    this._nombre = nombre;
    this._fechaUltLanzamiento = fechaUltLanzamiento;
    this._numeroRevista = numeroRevista;
    this._precio = precio;
  }

  /** Getter del atributo nombre
   * @returns el nombre de la revista
   */
  get nombre() {
    return this._nombre;
  }
  /** Setter del atributo nombre
   * @param nombre Nombre de la revista
   */
  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  /** Getter del atributo fechaUltLanzamiento
   * @returns el la fecha del ultimo lanzamiento
   */
  get fechaUltLanzamiento() {
    return this._fechaUltLanzamiento;
  }
  /** Setter del atributo fechaUltLanzamiento
   * @param fechaUltLanzamiento Fecha del ultimo lanzamiento
   */
  set fechaUltLanzamiento(fechaUltLanzamiento: Date) {
    this._fechaUltLanzamiento = fechaUltLanzamiento;
  }

  /** Getter del atributo numeroRevista
   * @returns el ultimo numero de la revista
   */
  get numeroRevista() {
    return this._numeroRevista;
  }
  /** Setter del atributo numeroRevista
   * @param numeroRevista Ultimo numero de la revista
   */
  set numeroRevista(numeroRevista: number) {
    this._numeroRevista = numeroRevista;
  }

  /** Getter del atributo precio
   * @returns el precio de la revista
   */
  get precio() {
    return this._precio;
  }
  /** Setter del atributo precio
   * @param precio Precio de la revista
   */
  set precio(precio: number) {
    this._precio = precio;
  }

  /**
   * Método para instanciar un nuevo subscriptor a la revista, que va a ser un observador
   * @param observer Nuevo Subscriptor
   */
  subscribe(observer: Observer) {
    if (this.observers.includes(observer)) {
      throw new Error('El subscriptor ya estaba subscrito a la revista');
    } else {
      this.observers.push(observer);
    }
  }

  /**
   * Método para eliminar un subscriptor de la revista, que es observador
   * @param observer Subscriptor a eliminar
   */
  unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('El subscriptor no estaba subscripto a la revista');
    } else {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Método que notifica a los subscriptores cuando es llamado
   */
  notify() {
    this.observers.forEach((observer) => observer.update(this));
  }

  /**
   * Método para cuando se lanza un nuevo numero de revista
   */
  nuevoNumeroRevista() {
    this._numeroRevista++;
    this._fechaUltLanzamiento = new Date();
    this.notify();
  }
}