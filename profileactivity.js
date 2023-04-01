let pfp = "profile.jpg";
let fullname = prompt("Enter your fullname here: ");
let ausername = prompt("Enter your username here: ");
let gender = prompt("Enter your gender here (F/M): ");
let description = prompt("Describe yourself: ");
let birthyear = prompt("Enter the year you were born here: ");
let cage = yeartoage(birthyear);

document.getElementById("ppic").innerHTML = pfp;
document.getElementById("fname").innerHTML = fullname;
document.getElementById("gender").innerHTML = gender;
document.getElementById("username").innerHTML = ausername;
document.getElementById("desc").innerHTML = description;
document.getElementById("year").innerHTML = birthyear;
document.getElementById("age").innerHTML = cage;

function yeartoage(birthyear)
{
    return 2023 - birthyear;
}
