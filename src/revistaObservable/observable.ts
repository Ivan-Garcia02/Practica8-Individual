import { Observer } from "../subscriptorObserver/observer";

/**
 * Interface for observable classes
 */
export interface Observable {
  /**
   * Método para instanciar un nuevo subscriptor a la revista, que va a ser un observador
   * @param observer Nuevo Subscriptor
   */
  subscribe(observer: Observer): void;

  /**
   * Método para eliminar un subscriptor de la revista, que es observador
   * @param observer Subscriptor a eliminar
   */
  unsubscribe(observer: Observer): void;

  /**
   * Método que notifica a los subscriptores cuando es llamado
   */
  notify(): void;
}