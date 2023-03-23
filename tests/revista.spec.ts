import 'mocha';
import { expect } from 'chai';
import { Revista } from '../src/revistaObservable/revista'
import { Subscriptor } from '../src/subscriptorObserver/subscriptor'

describe('Tests para la clase Revista', () => {
  it('Se puede crear una clase Revista', () => {
    expect(new Revista('Hola', new Date, 0, 1.86)).not.to.be.undefined
  })

  it('Se puede acceder al atributo nombre', () => {
    const revista = new Revista('Hola', new Date, 0, 1.86);
    expect(revista.nombre).to.be.eql('Hola');
    expect(revista.nombre = 'ULL').to.be.eql('ULL');
  })
  it('Se puede acceder al atributo fechaUltLanzamiento', () => {
    const revista = new Revista('Hola', new Date, 0, 1.86);
    expect(revista.fechaUltLanzamiento).to.be.eql(new Date);
    expect(revista.fechaUltLanzamiento = new Date).to.be.eql(new Date);
  })
  it('Se puede acceder al atributo numeroRevista', () => {
    const revista = new Revista('Hola', new Date, 0, 1.86);
    expect(revista.numeroRevista).to.be.eql(0);
    expect(revista.numeroRevista = 1).to.be.eql(1);
  })
  it('Se puede acceder al atributo precio', () => {
    const revista = new Revista('Hola', new Date, 0, 1.86);
    expect(revista.precio).to.be.eql(1.86);
    expect(revista.precio = 2.56).to.be.eql(2.56);
  })

  it('Se pueden subscribir a la revista', () => {
    const revista = new Revista('Hola', new Date, 0, 1.86);
    const subscriptor1 = new Subscriptor('Ivan', 20, "Masculino");
    const subscriptor2 = new Subscriptor('Laura', 35, "Femenino");

    expect(revista.subscribe(subscriptor1));
    expect(revista.subscribe(subscriptor2));
  })

  it('Se pueden dessubscribir a la revista', () => {
    const revista = new Revista('Hola', new Date, 0, 1.86);
    const subscriptor1 = new Subscriptor('Ivan', 20, "Masculino");
    const subscriptor2 = new Subscriptor('Laura', 35, "Femenino");

    revista.subscribe(subscriptor1);
    revista.subscribe(subscriptor2);

    expect(revista.unsubscribe(subscriptor1));
    expect(revista.unsubscribe(subscriptor2));
  })

  it('Se pueden notifica a los subscriptores de la revista', () => {
    const revista = new Revista('Hola', new Date, 0, 1.86);
    const subscriptor1 = new Subscriptor('Ivan', 20, "Masculino");
    const subscriptor2 = new Subscriptor('Laura', 35, "Femenino");
    revista.subscribe(subscriptor1);
    revista.subscribe(subscriptor2);

    expect(revista.notify());
  })

  it('Se pueden añadir un nuevo numero a la revista', () => {
    const revista = new Revista('Hola', new Date, 0, 1.86);
    const subscriptor1 = new Subscriptor('Ivan', 20, "Masculino");
    revista.subscribe(subscriptor1);

    expect(revista.nuevoNumeroRevista());
    expect(revista.nuevoNumeroRevista());
    expect(revista.nuevoNumeroRevista());
  })
})