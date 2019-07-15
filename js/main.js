
function generateName() {
  var date = document.getElementById("numDD");
  var month = document.getElementById("numMM");
  var century = document.getElementById("numCC");
  var year = document.getElementById("numYY");
  var gender = document.getElementById("txtgender");
}
  // var DD= parseInt(date);
  // var MM= parseInt(month);
  // var CC= parseInt(century);
  // var YY= parseInt(year);
function dayName(){
  generateName();
  var dayBorn = ( ( (century/4) -2*year-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
  // var akanDate = parseInt(dayBorn);
  // alert(akanDate);
  console.log(dayBorn);
  return (math.floor(dayBorn));
}

// document.getElementById("generateName").onclick = generateName(DD,MM,CC,YY);
function checkGender(){
if (dayBorn === 0 && gender == "m") {
  alert("Kwasi");
}
else if (dayBorn === 0 && gender == "f"){
  alert("Akosua");
}
else if (dayBorn === 1 && gender == "m"){
  alert("Kwadwo");
}
else if (dayBorn === 1 && gender == "f"){
  alert("Adwoa");
}
else if (dayBorn === 2 && gender == "m"){
  alert("Kwabena");
}
else if (dayBorn === 2 && gender == "f"){
  alert("Abenaa");
}
else if (dayBorn === 3 && gender == "m"){
  alert("Kwaku");
}
else if (dayBorn === 3 && gender == "f"){
  alert("Akua");
}
else if (dayBorn == 4 && gender == "m"){
  alert("Yaw");
}
else if (dayBorn === 4 && gender == "f"){
  alert("Yaa");
}
else if (dayBorn === 5 && gender == "m"){
  alert("Kofi");
}
else if (dayBorn === 5 && gender == "f"){
  alert("Afua");
}
else if (dayBorn === 6 && gender == "m"){
  alert("Kwame");
}
else if (dayBorn === 6 && gender == "f"){
  alert("Ama");
}
else{
  alert("INPUT IS INVALID! PLEASE TRY AGAIN");
}
}
function akanName(){
  
}
