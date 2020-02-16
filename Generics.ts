
class Observables<T> {
  constructor(public value: T){}
}

let x : Observables<number>;

let y : Observables<Person>;

let z = new Observables(23);