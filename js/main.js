function generateName() {
  var date = newDate(DD, MM, CCYY);
  var DD = getDate();
  var MM = getMonth();
  var CC = document.getElementById("CC");
  var YY = document.getElementById("YY");
  var gender = document.getElementById("gender");
  var dayBorn=(((((CC/4) -((2*CC)-1)) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD)) % 7)
}
function outputText(){
  var fullName = document.getElementById("fullname");
  var akanName = document.getElementById("akanName");
  alert("Hi there, " + fullName + "!. Your Akan name is," + akanName + "  :)")
