function showList(){
    $('ul').html(getList());
}
$(document).ready(function () {
    showList();

//on click save button 
$("#split").click (function(){
    
    var name = document.getElementById("nameInput")
    var number = document.getElementById("numberInput")
    var email = document.getElementById("emailInput")
    var gender = document.getElementById("slider-flip-m")

    var obj = new User(name.value, number.value,email.value, gender.value )
    users.push(obj);
    console.log(gender.value);
    showList();
    $('ul').listview('refresh');
    window.location.href = '#contactList';
})
console.log(users)

}

);
