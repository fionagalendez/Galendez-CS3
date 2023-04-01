var nickname = prompt("Enter your nickname: ");
var height = prompt("Enter your height (in inches): ");
var weight = prompt("Enter your weight (in kilograms): ");

var heightfinal = intofeet(height);
var weightfinal = kgtolbs(weight);

alert('Nickname: ' + nickname + '\nHeight: ' + heightfinal + ' feet\n' + 'Weight: ' + weightfinal + ' lbs');

var firstname = prompt("Enter your firstname: ");
var lastname = prompt("Enter your lastname: ");
var birthyear = prompt("Enter your birthyear: ");

var age = yeartoage(birthyear);

document.getElementById("statement").innerHTML = ('Hello ' + firstname + ' ' + lastname + '! How does it feel to be ' + age + ' years old?');

function myFunction() {
  let text = "Do you agree with sharing your personal information in this site?\nEither OK or Cancel.";
  if (confirm(text) == true) {
    text = "Nickname: " + nickname + "\nHeight: " + heightfinal + " feet\n" + "Weight: " + weightfinal + " lbs";
  } else {
    text = "User does not wish to share his/her information.";
  }
  document.getElementById("result").innerHTML = text;
}

function intofeet(height)
{
	return height / 12;
}

function kgtolbs(weight)
{
	return weight * 2.2;
}

function yeartoage(birthyear)
{
	return 2023 - birthyear;
}
