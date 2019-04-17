function validateForm() {
  var fn = document.forms["contactform"]["fname"].value;
  var ln = document.forms["contactform"]["lname"].value;
  var subject = document.forms["contactform"]["subject"].value;
  if (fn == "") {
    alert("blank must be filled out");
    return false;
  }
  if (ln == "") {
    alert("blank must be filled out");
    return false;
  }
  if (subject == "") {
    alert("blank must be filled out");
    return false;
  }
}
