import { Observable } from "../revistaObservable/observable";

/**
 * Interface for observer classes
 */
export interface Observer {
  /**
   * Método para que cuando es invocado significa que se ha lanzado un nuevo numero de revista, en la que esta observando
   * @param observable Revista a la que observa el subscriptor
   */
  update(observable: Observable): void;
}