const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  person.fullName.call(person1, "Oslo", "Norway"); // output: John Doe,Oslo,Norway


  // AIM: METHOD REUSE
  //With the call() method, we can write a method that can be used on different objects.