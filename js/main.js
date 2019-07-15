
function generateName(myForm) {
  var DD = document.getElementById("numDD").value;
  var MM = document.getElementById("numMM").value;
  var CC = document.getElementById("numCC").value;
  var YY = document.getElementById("numYY").value;
  var gender = document.getElementById("txtgender").value;
  var result = (((( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7))+2).toFixed();
  var name = document.getElementById("txtfullname");

if (result < 1 && gender.toLowerCase() == "m") {
  alert("Hi! Your Akan name is  Kwasi");
}
else if (result < 1 && gender.toLowerCase() == "f"){
  alert("Hi! Your Akan name is  Akosua");
}
else if (result < 2 && gender.toLowerCase() == "m"){
  alert("Hi! Your Akan name is Kwadwo");
}
else if (result < 2 && gender.toLowerCase() == "f"){
  alert("Hi! Your Akan name is  Adwoa");
}
else if (result < 3 && gender.toLowerCase() == "m"){
  alert("Hi! Your Akan name is  Kwabena");
}
else if (result < 3 && gender.toLowerCase() == "f"){
  alert("Hi! Your Akan name is  Abenaa");
}
else if (result < 4 && gender.toLowerCase() == "m"){
  alert("Hi! Your Akan name is  Kwaku");
}
else if (result < 4 && gender.toLowerCase() == "f"){
  alert("Hi! Your Akan name is  Akua");
}
else if (result < 5 && gender.toLowerCase() == "m"){
  alert("Hi! Your Akan name is  Yaw");
}
else if (result < 5 && gender.toLowerCase() == "f"){
  alert("Hi! Your Akan name is  Yaa");
}
else if (result < 6 && gender.toLowerCase() == "m"){
  alert("Hi! Your Akan name is  Kofi");
}
else if (result < 6 && gender.toLowerCase() == "f"){
  alert("Hi! Your Akan name is  Afua");
}
else if (result < 7 && gender.toLowerCase() == "m"){
  alert("Hi! Your Akan name is  Kwame");
}
else if (result < 7 && gender.toLowerCase() == "f"){
  alert("Hi! Your Akan name is  Ama");
}
else{
  alert("INVALID!");
}
}
generateName()
