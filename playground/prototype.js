//Ex1//

(function () {

    var person = {
        type: 'human',
    }

    var name1 = Object.create(person);
        name1.name = "Ann";
    
    var name2 = Object.create(name1);
        name2.age = 25;

        console.log(name1);
        console.log(name2);


})();


//Ex2//

(function(){
    var person = {
        type: "Human",
    }

    var x = Object.create(person);
        x.name = "Lusy";


    var y = Object.create(x);
        y.name = "Lily";
            
console.log(x);
console.log(y);
})()
