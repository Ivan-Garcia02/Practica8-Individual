import 'mocha';
import { expect } from 'chai';
import { Revista } from '../src/revistaObservable/revista'
import { Subscriptor } from '../src/subscriptorObserver/subscriptor'

describe('Tests para la clase Subscriptor', () => {
  it('Se puede crear una clase Subscriptor', () => {
    expect(new Subscriptor('Ivan', 20, "Masculino")).not.to.be.undefined
  })

  it('Se puede acceder al atributo nombre', () => {
    const subscriptor = new Subscriptor('Ivan', 20, "Masculino");
    expect(subscriptor.nombre).to.be.eql('Ivan');
    expect(subscriptor.nombre = 'Jose').to.be.eql('Jose');
  })
  it('Se puede acceder al atributo edad', () => {
    const subscriptor = new Subscriptor('Ivan', 20, "Masculino");
    expect(subscriptor.edad).to.be.eql(20);
    expect(subscriptor.edad = 32).to.be.eql(32);
  })
  it('Se puede acceder al atributo genero', () => {
    const subscriptor = new Subscriptor('Ivan', 20, "Masculino");
    expect(subscriptor.genero).to.be.eql('Masculino');
    expect(subscriptor.genero = 'Femenino').to.be.eql('Femenino');
  })

  it('Le llega una notificacion de lo que observa', () => {
    const revista = new Revista('Hola', new Date, 0, 1.86);
    const subscriptor = new Subscriptor('Ivan', 20, "Masculino");
    revista.subscribe(subscriptor);

    expect(subscriptor.update(revista));
  })
})