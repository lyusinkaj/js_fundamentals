var text = "JavaScript";
console.log(typeof "JavaScript");

var str = "I am that sentence";
var res = str.split();
console.log(res);

var str1 = "Anun Azganun";
var res1 = str1.slice(0,6);
console.log(res1);


var txt1 = "Menq lucum enq";
var txt2 = "vorosh xndirner";
var txt3 = txt1 +" "+txt2;
var txt1 = "JavaScript";
var txt4 = txt3.concat(" ", txt1);
console.log(txt4);



var sts = "Lusine";
var sts1 = sts.length;
console.log(sts1);


var string = "hello my dear students";
var uppercaseFirstLetter = string.charAt(0).toUpperCase();
var remainString = string.slice(1);
console.log(uppercaseFirstLetter + remainString);




var text7 = "Indz petq e trogel";
text7 = text7.split("");
console.log(text7);
​
var str = "im anunn e Lusine"
if (str.charAt(0)===str.charAt(0).toUpperCase()) {
    console.log(true);
} else {
    console.log(false);
}
​
​
var hour;
switch (new Date().getHours()) {
    case new Date().getHours(0,11):
        hour = "am";
        break;
    case new Date().getHours(12,23):
        hour = "p.m";
        break;
}
console.log(hour);