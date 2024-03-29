//Ex1//

var person = {
    age: 26,
    sayAge: function() {
      if (this.age >= 18) {
        console.log(this.age);
      }
    }
  };
  
  person.sayAge();
  
  //Ex2//
  
  function type (str) {
    var types = {
      'string': 'String',
      'number': 'Number',
      'boolean': 'Boolean',
      'null': 'Null',
      'undefined': 'Undefined',
      'object': 'Object',
    };
  
    return types[typeof(str)];
  }
  
  console.log(type("number"));
  
  
  //Ex3//
  
  function obj (par1, par2, par3) {
    var type = {
      x: par1,
      y: par2,
      z: par3,
    }
  
    console.log(type);
  }
  
  obj('Ann', 'Lily', 'Lusy');
  
  //Ex4//
  
  function parametr (x) {
    var str = {
      age: 26,
      name: 'Lusine',
    };
  
    if (str[x]) {
      console.log(str[x]);
    } else {
      console.log(false);
    }
  }
  
  parametr('age');
  
  
  //Ex5//
  
  function deleteProperty () {
    var obj = {
      name: "Lusine",
      lastName: "Khachatryan",
      age: 26,
      id: 05555,
    };
  
    for (var i in obj) {
      if (i === 'age') {
        delete obj[i];
        console.log(obj);
      } 
    }
  }
  
  deleteProperty();
  
  //Ex6//
  function objLength(obj) {
    var size = 0;
  
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        size += 1;
      }
    }
  
    return size;
  }
  
  console.log(objLength({a: 1, b: 2, c: 3, d: 4}));
  console.log(objLength({c: 3, d: 4}));
  console.log(objLength({d: 4}));
  
  //Ex7//
  
  function lus () {
    var obj = {
      num1: 11,
      num2: 27,
      sumNums: function() {
        this.sum =this.num1 + this.num2;
      }
    };
  
    obj.sumNums();
    console.log(obj.sum);
  }
  
  lus();