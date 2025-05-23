//// [tests/cases/compiler/staticMemberExportAccess.ts] ////

//// [staticMemberExportAccess.ts]
class Sammy {
   foo() { return "hi"; }
  static bar() {
    return -1;
   }
}
module Sammy {
    export var x = 1;
}
interface JQueryStatic {
    sammy: Sammy; // class instance
}
var $: JQueryStatic;
var instanceOfClassSammy: Sammy = new $.sammy(); // should be error
var r1 = instanceOfClassSammy.foo(); // r1 is string
var r2 = $.sammy.foo();
var r3 = $.sammy.bar(); // error
var r4 = $.sammy.x; // error

Sammy.bar();

//// [staticMemberExportAccess.js]
class Sammy {
    foo() { return "hi"; }
    static bar() {
        return -1;
    }
}
(function (Sammy) {
    Sammy.x = 1;
})(Sammy || (Sammy = {}));
var $;
var instanceOfClassSammy = new $.sammy(); // should be error
var r1 = instanceOfClassSammy.foo(); // r1 is string
var r2 = $.sammy.foo();
var r3 = $.sammy.bar(); // error
var r4 = $.sammy.x; // error
Sammy.bar();
