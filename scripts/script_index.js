var LogicIndex = 0;
var titles0 = ["Login ☄","Click Buttons ☄"];
var titles1 = ["Main Menu ☄","Click Buttons ☄"];
var titles2 = ["Main Menu ☄","Click Buttons ☄"];
var titles3 = ["Main Menu ☄","Click Buttons ☄"];
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
    if (login.trim() === "admin" || password.trim() === "12345678") {
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

function ShowPasswordReg(){
    var eye_on = document.getElementById("passwordEyeOn");
    var eye_off = document.getElementById("passwordEyeOff");
    var $password = document.getElementById('passwordRegInput');
  
    if (eye_off.classList.contains("hidden")) {
        eye_off.classList.remove("hidden");
        eye_on.classList.add("hidden");
    } else {
        eye_off.classList.add("hidden");
        eye_on.classList.remove("hidden");
    }
    if($password.type == 'password'){
        $password.setAttribute('type','text')
    }else {
        $password.setAttribute('type','password')
    }
    
}
