var LogicIndex = 0;
var titles0 = ["☄ Login","☄ Kamehameha"];
var titles1 = ["☄ Main Menu","☄ Kamehameha"];
var titles2 = ["☄ Profile","☄ Kamehameha"];
var titles3 = ["☄ Haupt Site","☄ Kamehameha"];
var currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("loginForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var login = document.getElementById("loginInput").value;
        var password = document.getElementById("passwordInput").value;
        var isValid = validateLoginAndPassword(login, password);
        if (isValid) {
            LogicIndex = 1;
            window.location.href = "profile.html";
        } 
        else {
            FailSection();
        }
    });
});

setInterval(function() {
    var newTitle;

    if (LogicIndex === 0) {
        newTitle = titles0[currentIndex];
    } else if (LogicIndex === 1) {
        newTitle = titles1[currentIndex];
    } else if (LogicIndex === 2) {
        newTitle = titles2[currentIndex];
    } else if (LogicIndex === 3) {
        newTitle = titles3[currentIndex];
    } else {
        newTitle = "Click Buttons ☄";
    }

    currentIndex = (currentIndex + 1) % titles1.length;

    document.title = newTitle;
}, 3000); 
  
function validateLoginAndPassword(login, password) {
    if (login.trim() === "" || password.trim() === "") {
        return false;
    }
    if (login.length < 5 || password.length < 8) {
        return false;
    }
    if (login.trim() == "admin" || password.trim() == "12345678") {
        return true;
    }
}

function FailSection() {
    var section_main = document.getElementById("main");
    var section_fail = document.getElementById("fail");
  
    if (section_main.classList.contains("hidden")) {
        section_main.classList.remove("hidden");
        section_fail.classList.add("hidden");
    } else {
        section_main.classList.add("hidden");
        section_fail.classList.remove("hidden");
    }
}

function ForgetSection() {
    var section_main = document.getElementById("main");
    var section_forget = document.getElementById("forget");
  
    if (section_main.classList.contains("hidden")) {
        section_main.classList.remove("hidden");
        section_forget.classList.add("hidden");
    } else {
        section_main.classList.add("hidden");
        section_forget.classList.remove("hidden");
    }
}

function RegistrationSection() {
    var section_main = document.getElementById("main");
    var section_registration = document.getElementById("registration");
  
    if (section_main.classList.contains("hidden")) {
        section_main.classList.remove("hidden");
        section_registration.classList.add("hidden");
    } else {
        section_main.classList.add("hidden");
        section_registration.classList.remove("hidden");
    }
}

function ShowPasswordLog(){
    var Logeye_on = document.getElementById("passwordLogEyeOn");
    var Logeye_off = document.getElementById("passwordLogEyeOff");
    var $Logpassword = document.getElementById('passwordLogInput');
  
    if (Logeye_off.classList.contains("hidden")) {
        Logeye_off.classList.remove("hidden");
        Logeye_on.classList.add("hidden");
    } else {
        Logeye_off.classList.add("hidden");
        Logeye_on.classList.remove("hidden");
    }
    if($Logpassword.type == 'password'){
        $Logpassword.setAttribute('type','text')
    }else {
        $Logpassword.setAttribute('type','password')
    }
    
}

function ShowPasswordReg(){
    var Regeye_on = document.getElementById("passwordRegEyeOn");
    var Regeye_off = document.getElementById("passwordRegEyeOff");
    var $Regpassword = document.getElementById('passwordRegInput');
  
    if (Regeye_off.classList.contains("hidden")) {
        Regeye_off.classList.remove("hidden");
        Regeye_on.classList.add("hidden");
    } else {
        Regeye_off.classList.add("hidden");
        Regeye_on.classList.remove("hidden");
    }
    if($Regpassword.type == 'password'){
        $Regpassword.setAttribute('type','text')
    }else {
        $Regpassword.setAttribute('type','password')
    }
    
}

function UsersTerms(){

}