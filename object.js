function showList() {
  $("ul").html(getList());
  $("ul").listview("refresh");
}
$(document).ready(function () {
  showList();

  //------------------------------------------onclick save button ------------------------------------------
  $("#save").click(function () {
    var name = document.getElementById("nameInput");
    var number = document.getElementById("numberInput");
    var email = document.getElementById("emailInput");
    var gender = document.getElementById("slider-flip-m");
    if (!(name.value && number.value)) {
      alert("Add info to save as contact.");
      window.location.href = "#newContact";
    } else {
      var obj = new User(name.value, number.value, email.value, gender.value);
      users.push(obj);
      showList();
      $("ul").listview("refresh");
      window.location.href = "#contactList";
      $("#myForm")[0].reset();
    }
  });
});
//------------------------------------------onclick cancel------------------------------------------
$("#cancel").click(function () {
  console.log("canceled");
  $("#myForm")[0].reset();
});
