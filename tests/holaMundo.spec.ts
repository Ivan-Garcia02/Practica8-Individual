import 'mocha';
import { expect } from 'chai';
import { holaMundo } from '../src/holaMundo'

describe('Tests para holaMundo', () => {
  it('Test de funcion', () => {
    expect(holaMundo("Hola Mundo")).to.be.eql("Hola Mundo")
  })
})