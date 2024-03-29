//     // Call
function myFunction (name, name2) {
    console.log('hello my friend');
    console.log(name, name2);
    console.log(this);
    console.log(this.age);
}


myFunction.call(undefined, 'Ann', 'Lusy');

var obj = {
    age: 26
}

myFunction.call(obj, 'Lily', 'Katrin');


// Apply
function func (name, name2) {
    console.log('hello my friend');
    console.log(name, name2);
    console.log(this);
    console.log(this.age);
}

func.apply(undefined, ['Lily', 'Lusy']);

var obj = {
    age: 26
}

func.apply(obj, ['Ann', 'Katrin']);

// Bind
function myFunc (name, name2) {
    console.log('hello my dear');
    console.log(name, name2);
    console.log(this);
    console.log(this.age);
}

var bindedObj = myFunc.bind(undefined, 'Ann', 'Lusy');

var obj = {
    age: 26
}

var bindedObj2 = myFunc.bind(obj, 'Lily', 'Katrin');

bindedObj();
bindedObj2();

