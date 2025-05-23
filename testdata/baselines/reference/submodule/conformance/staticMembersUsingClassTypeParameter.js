//// [tests/cases/conformance/types/typeParameters/typeParameterLists/staticMembersUsingClassTypeParameter.ts] ////

//// [staticMembersUsingClassTypeParameter.ts]
// BUG 745747
class C<T> {
    static x: T;
    static f(x: T) {}
}

class C2<T, U> {
    static x: U;
    static f(x: U) { }
}

class C3<T extends Date> {
    static x: T;
    static f(x: T) { }
}

//// [staticMembersUsingClassTypeParameter.js]
// BUG 745747
class C {
    static x;
    static f(x) { }
}
class C2 {
    static x;
    static f(x) { }
}
class C3 {
    static x;
    static f(x) { }
}
