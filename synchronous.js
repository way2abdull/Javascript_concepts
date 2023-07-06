function f1() {
    console.log("function f1");
  }
  function f2() {
    console.log("function f2");
    f1();
  }
  function f3() {
    console.log("function f3");
    f2();
  }
  f3(); //since function execution se sequential hence synchronous in nature.