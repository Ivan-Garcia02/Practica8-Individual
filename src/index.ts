import { Revista } from "./revistaObservable/revista";
import { Subscriptor } from "./subscriptorObserver/subscriptor";

const revista = new Revista('Hola', new Date, 0, 1.86);
const subscriptor1 = new Subscriptor('Ivan', 20, "Masculino");
const subscriptor2 = new Subscriptor('Laura', 35, "Femenino");

revista.subscribe(subscriptor1);
revista.subscribe(subscriptor2);

try {
  revista.subscribe(subscriptor1);
} catch (error) {
  console.log('secondButtonObserver was already subscribed');
}

console.log('Nuevo numero de revista');
revista.nuevoNumeroRevista();

console.log('firstButtonObserver unsubscription');
revista.unsubscribe(subscriptor1);

console.log('Nuevo numero de revista');
revista.nuevoNumeroRevista();
console.log('Nuevo numero de revista');
revista.nuevoNumeroRevista();