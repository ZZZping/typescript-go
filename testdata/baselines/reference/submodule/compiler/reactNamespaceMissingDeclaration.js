//// [tests/cases/compiler/reactNamespaceMissingDeclaration.tsx] ////

//// [reactNamespaceMissingDeclaration.tsx]
// Error myReactLib not declared
<foo data/>

//// [reactNamespaceMissingDeclaration.js]
// Error myReactLib not declared
<foo data/>;
