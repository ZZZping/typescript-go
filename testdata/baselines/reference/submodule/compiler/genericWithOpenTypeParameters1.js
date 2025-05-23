//// [tests/cases/compiler/genericWithOpenTypeParameters1.ts] ////

//// [genericWithOpenTypeParameters1.ts]
class B<T> {
   foo(x: T): T { return null; }
}

var x: B<number>;
x.foo(1); // no error
var f = <T>(x: B<T>) => { return x.foo(1); } // error
var f2 = <T>(x: B<T>) => { return x.foo<T>(1); } // error
var f3 = <T>(x: B<T>) => { return x.foo<number>(1); } // error
var f4 = (x: B<number>) => { return x.foo(1); } // no error


//// [genericWithOpenTypeParameters1.js]
class B {
    foo(x) { return null; }
}
var x;
x.foo(1); // no error
var f = (x) => { return x.foo(1); }; // error
var f2 = (x) => { return x.foo(1); }; // error
var f3 = (x) => { return x.foo(1); }; // error
var f4 = (x) => { return x.foo(1); }; // no error
