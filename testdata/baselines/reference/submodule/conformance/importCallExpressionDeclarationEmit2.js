//// [tests/cases/conformance/dynamicImport/importCallExpressionDeclarationEmit2.ts] ////

//// [0.ts]
export function foo() { return "foo"; }

//// [1.ts]
var p1 = import("./0");


//// [0.js]
export function foo() { return "foo"; }
//// [1.js]
var p1 = import("./0");
