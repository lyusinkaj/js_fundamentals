 //Ex1//

 function returnNum(n) {
    var nn = 2 * n;
    var nnn = 3 * n;
  
    return String(n) + String(nn) + String(nnn);
  }
  
  console.log(returnNum(3)); // 369
  console.log(returnNum(17)); // 173451
  console.log(returnNum(100)); // 100200300
  
   // Ex2//
  function numAverage(num1, num2, num3, num4, num5) {
    var sum = num1 + num2 + num3 + num4 + num5;
    console.log(sum / 5);
  }
  
  numAverage(45, -12, 0, 3, -15); // 4.2
  numAverage(7, 52, -23, 9, -81); // -7.2
  
   //Ex3//
  function numOrder(num1, num2, num3) {
    if (num1 < num2 && num2 < num3) {
      console.log(num1, num2, num3);
    } else if (num1 > num2 && num2 > num3) {
      console.log(num3, num2, num1);
    } else if (num1 > num2 && num2 < num3) {
      console.log(num2, num1, num3);
    } else {
      console.log(num3, num1, num2);
    }
  }
  
  numOrder(45, 26, 78);
  numOrder(-456, -23, 0);
  
   // Ex.4//
  
  function getDay () {
    var day = "Today is ";
    switch (new Date().getDay()) {
     case 0:
        day += "Sunday";
        break;
      case 1:
        day += "Monday";
        break;
      case 2:
         day += "Tuesday";
        break;
      case 3:
        day += "Wednesday";
        break;
      case 4:
        day += "Thursday";
        break; 
      case 5:
        day += "Friday";
        break;
      case 6:
        day += "Saturday";
    }
  
    return day;
  }
  
  function getTime() {
    var str = "Current time is: ";
    var today = new Date();
    var time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()
    var hour = str + time;
  
    return hour;
  }
  
  console.log(getDay() + "\n" + getTime());
  
   //Ex5//
  
  function reverseNum(num) {
    num = String(num);
    return num.split('').reverse().join('');
  }
  
  console.log(reverseNum(34225));
  
  //Ex6//
  
  function alphString(str) {
    return str.split('').sort().join('');
  }
  
  alphString("webmaster");
  
  //Ex7//
  
  function lll(a, b) {
     
      if (a > b) {
      console.log(a + b, a - b, a / b, a * b )}
      return;
      }
      
  
  lll(14, 5);
  lll(99, 11);
  lll(81, 16);
