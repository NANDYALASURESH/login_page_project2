let createLogin = document.getElementById("createLogin");
let firstPage = document.getElementById("firstPage");
let loginPage = document.getElementById("loginPage");
loginPage.style.display = "none";
createLogin.onclick = function() {
    firstPage.style.display = "none";
    loginPage.style.display = "block";
};

function getuserpassword() {
    let usersLoginData = JSON.parse(localStorage.getItem("userAndPasswords"));
    if (usersLoginData === null || usersLoginData === "") {
        return [];
    } else {
        return usersLoginData;
    }
}
let inputUser = document.getElementById("InputUser");
let inputPassword = document.getElementById("inputPassword");
let passTodo = getuserpassword();
let createBtn = document.getElementById("createBtn");
let valuepass = inputPassword.value;
createBtn.onclick = function() {
    let valuepass = inputPassword.value;
    let valueUser = inputUser.value;
    if (valueUser.endsWith(".online")) {
        let users = {
            username: valueUser,
            password: valuepass,
        };
        passTodo.push(users);
        firstPage.style.display = "block";
        loginPage.style.display = "none";
        localStorage.setItem("userAndPasswords", JSON.stringify(passTodo));
        inputPassword.value = "";
        inputUser.value = "";

    } else {
        let paraAlert = document.getElementById("paraAlert");
        paraAlert.textContent = "username endswith '.online'";
        paraAlert.style.color = "red";
        paraAlert.style.fontSize = "12px";
    }
};
let conditon = "false";
let lockPass = document.getElementById("lockPass");
lockPass.onclick = function() {
    if (conditon === "false") {
        inputPassword.type = "text";
        lockPass.style.color = "blue";
        conditon = "true";
    } else if (conditon === "true") {
        inputPassword.type = "password";
        conditon = "false";
        lockPass.style.color = "black";
    }
};
let conditon1 = "false";
let lockPass1 = document.getElementById("lockPass1");
let inputUser1 = document.getElementById("inputUser155");
let inputPassword1 = document.getElementById("inputPassword1");
let loginAfter = document.getElementById("loginAfter");
lockPass1.onclick = function() {
    if (conditon1 === "false") {
        inputPassword1.type = "text";
        lockPass1.style.color = "blue";
        conditon1 = "true";
    } else if (conditon1 === "true") {
        inputPassword1.type = "password";
        conditon1 = "false";
        lockPass1.style.color = "black";
    }
};

function additemsd(itell) {
    if (inputUser1.value === itell.username) {
        if (inputPassword1.value === itell.password) {
            firstPage.style.display = "none";
            loginAfter.style.display = "block";
        } else {
            let alertuserss1 = document.getElementById("alertuserss1");
            alertuserss1.textContent = "Please Enter the correct Password";
            alertuserss1.style.color = "red";
            alertuserss1.style.fontSize = "12px";
            inputPassword1.value = '';
            inputUser1.value = '';
        }
    } else {
        let alertuserss = document.getElementById("alertuserss");
        alertuserss.textContent = "Please Enter the correct username";
        alertuserss.style.color = "red";
        alertuserss.style.fontSize = "12px";

    }
}
let loginIdOf = document.getElementById("loginIdOf");

loginIdOf.onclick = function() {
    for (let i of passTodo) {
        additemsd(i);
    }
};