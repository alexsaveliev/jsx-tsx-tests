import * as a from './a';

export default class c {
    foo(): string {
        return 'bar';
    }
}

a.a();

const x = new c();
console.log(c.foo());