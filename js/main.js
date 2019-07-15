function generateName() {
  var date = newDate(DD, MM, CCYY);
  var DD = getDate();
  var MM = getMonth();
  var CC = 
  var dayBorn=(((((CC/4) -((2*CC)-1)) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD)) % 7)
