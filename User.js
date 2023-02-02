class User {
  #name;
  #phone;
  #email;
  #gender;

  constructor(name, phone, email, gender) {
    this.#name = name;
    this.#phone = phone;
    this.#email = email;
    this.#gender = gender;
  }
  setName(name) {
    this.#name = name;
  }
  setPhone(phone) {
    this.#phone = phone;
  }
  setEmail(email) {
    this.#email = email;
  }
  setGender(gender) {
    this.#gender = gender;
  }
  getName() {
    return this.#name;
  }
  getEmail() {
    return this.#email;
  }
  getGender() {
    return this.#gender;
  }
  getPhone() {
    return this.#phone;
  }
}

var users = [
  new User("Youssef Zekry", "01060665412", "youssef.com", "male"),
  new User("Mahmoud Fath", "0106533455", "Fath.com", "male"),
  new User("Michael Tarek", "0103521531", "Michael.com", "male"),
  new User("Mona Mahrous", "01035156189", "Mona.com", "female"),
];

var newUsers = [];
var index;
var femaleImage = "resources/img/female.png";
var maleImage = "resources/img/male.png";
//------------------------------------------sorting list------------------------------------------
function getList() {
  users = users.sort((a, b) => (a.getName() > b.getName() ? 1 : -1));
  var result = "";
  for (let i = 0; i < users.length; i++) {
    result += "<li onclick='view(" + i + ")'><a href='#contactInfo'>";

    if (users[i].getGender().toUpperCase() == "MALE")
      result += '<img src="resources/img/male.png">';
    else result += '<img src="resources/img/female.png">';

    result += `<h2>${users[i].getName()}</h2></a>`;
    result += `<a href="tel:${users[i].getPhone}" data-rel="popup" data-position-to="window" data-transition="pop" data-icon="phone"></a>`;
    result += "</li> ";
  }
  return result;
}

// ------------------------------------------show profile data ------------------------------------------
function view(i) {
  index = i;
  if (users[i].getGender().toUpperCase() == "MALE") {
    $("#profileImage").attr("src", maleImage);
  } else {
    $("#profileImage").attr("src", femaleImage);
  }
  $("#name").val(users[i].getName());
  $("#phone").val(users[i].getPhone());
  $("#email").val(users[i].getEmail());
  $("#gender").val(users[i].getGender());
}

// ------------------------------------------Creating new array after deleting a specific contact------------------------------------------
function deleteArray(index1) {
  for (let i = 0; i < users.length; i++) {
    if (users[i] == users[index1]) {
    } else {
      newUsers.push(users[i]);
    }
  }

  users = newUsers;
}
//------------------------------------------deleting contact------------------------------------------
function deleteUser() {
  var name = users[index].name;

  deleteArray(index);
  showList();
  $("ul").listview("refresh");
  window.location.href = "#contactList";
}

//------------------------------------------ viewing data for edit profile ------------------------------------------
function editView() {
  $("#editName").val(users[index].getName());
  $("#editPhone").val(users[index].getPhone());
  $("#editEmail").val(users[index].getEmail());
}
//------------------------------------------editing contact------------------------------------------
function edit() {
  editName = users[index].name = $("#editName").val();
  editPhone = users[index].phone = $("#editPhone").val();
  editEmail = users[index].email = $("#editEmail").val();
  
  $("#name").val(users[index].setName(editName));
  $("#phone").val(users[index].setPhone(editPhone));
  $("#email").val(users[index].setEmail(editEmail));
  showList();
  $("ul").listview("refresh");
  console.log(users[index].name);
  console.log(users[index].phone);
  console.log(users[index].email);
  view(index);
}
