function print() {
    console.log('print me');
  }
  
  function test() {
    console.log('test');
  }
  
  setTimeout(print, 2000);
  test();    //since function execution se not sequential hence asynchronous in nature.