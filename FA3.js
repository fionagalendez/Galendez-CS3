let num1 = Math.floor((Math.random() * 20) + 1);
document.getElementById("num1").innerHTML = num1;

let num2 = Math.floor((Math.random() * 20) + 1);
document.getElementById("num2").innerHTML = num2;

let num3 = Math.floor((Math.random() * 20) + 1);
document.getElementById("num3").innerHTML = num3;

let largest = Math.max(num1, num2, num3);

document.getElementById("long").innerHTML = "The name of your soulmate's fullname is " + largest + " letters long.";

let firstletter;

switch(num2){
    case 1:
      firstletter = "A";
      break;
    case 2:
      firstletter = "B";
      break;
    case 3:
      firstletter = "C";
      break;
    case 4:
      firstletter = "D";
      break;
    case 5:
      firstletter = "E";
      break;
    case 6:
      firstletter = "F";
      break;
    case 7:
      firstletter = "G";
      break;
    case 8:
      firstletter = "H";
      break;
    case 9:
      firstletter = "I";
      break;
    case 10:
      firstletter = "J";
      break;
    case 11:
      firstletter = "K";
      break;
    case 12:
      firstletter = "L";
      break;
    case 13:
      firstletter = "M";
      break;
    case 14:
      firstletter = "N";
      break;
    case 15:
      firstletter = "O";
      break;
    case 16:
      firstletter = "P";
      break;
    case 17:
      firstletter = "Q";
      break;
    case 18:
      firstletter = "R";
      break;
    case 19:
      firstletter = "S";
      break;
    case 20:
      firstletter = "T";
      break;
  }

document.getElementById("letter").innerHTML = "The first letter of the name of your soulmate is " + firstletter + ".";

function time(num2, num3) {
var num = num2 * num3;
var hours = (num / 60);
var rhours = Math.floor(hours);
var minutes = (hours - rhours) * 60;
var rminutes = Math.round(minutes);
return num + " minutes or " + rhours + " hour(s) and " + rminutes + " minute(s)";
}

document.getElementById("time").innerHTML = "It will take you " + time(num2, num3) + " to arrive at your soulmate's house.";
