

interface Person {
  first: string;
  last: string;
  [key: string]: any;
}

const person: Person = {
  first: 'jawad',
  last: 'ul hassam',
}

const person2: Person = {
  first: 'ahmed',
  last: 'ali',
  class: 8,
}