function generateName() {
  var day = document.getElementById("txtDD");
  var month = document.getElementById("txtMM");
  var century = document.getElementById("txtCC");
  var year = document.getElementById("txtYY");
  var gender = document.getElementById("txtgender");
  var DD= parseInt(day);
  var MM= parseInt(month);
  var CC= parseInt(century);
  var YY= parseInt(year);
  var dayBorn=(((((CC/4) -((2*CC)-1)) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD)) % 7)
if (dayBorn == "0" && gender == "m")
  console.log("Kwasi")
}
else if (dayborn == "0" && gender == "f"){
  console.log("Akosua")
}
else if (dayBorn == "1" && gender == "m")
  console.log("Kwadwo")
}
else if (dayborn == "1" && gender == "f"){
  console.log("Adwoa")
}
else if (dayBorn == "2" && gender == "m")
  console.log("Kwabena")
}
else if (dayborn == "2" && gender == "f"){
  console.log("Abenaa")
}
else if (dayBorn == "3" && gender == "m")
  console.log("Kwaku")
}
else if (dayborn == "3" && gender == "f"){
  console.log("Akua")
}
else if (dayBorn == "4" && gender == "m")
  console.log("Yaw")
}
else if (dayborn == "4" && gender == "f"){
  console.log("Yaa")
}
else if (dayBorn == "5" && gender == "m")
  console.log("Kofi")
}
else if (dayborn == "5" && gender == "f"){
  console.log("Afua")
}
else if (dayBorn == "6" && gender == "m")
  console.log("Kwame")
}
else if (dayborn == "6" && gender == "f"){
  console.log("Ama")
}
else{
  alert("INPUT IS INVALID! PLEASE TRY AGAIN")
}
function outputText(){
  var fullName = document.getElementById("txtfullname");
  var akanName = document.getElementById("txtakanName");
  alert("Hi there, " + txtfullName + "!. Your Akan name is," + txtakanName + "  :)")
