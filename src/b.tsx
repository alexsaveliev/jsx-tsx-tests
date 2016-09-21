import * as a from './a';

export default class b {
    foo(): string {
        return 'bar';
    }
}

a.a();

const x = new b();
console.log(x.foo());