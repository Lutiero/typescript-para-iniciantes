// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
window.UserData = {};
function isUserData(obj) {
    if (obj && typeof obj === "object") {
        return true;
    }
    else {
        return false;
    }
}
function validJSON(str) {
    try {
        JSON.parse(str);
    }
    catch (error) {
        return false;
    }
    return true;
}
function loadLocalStorage() {
    var loadUserData = localStorage.getItem("UserData");
    if (loadUserData && validJSON(loadUserData)) {
        var UserData = JSON.parse(loadUserData);
        if (isUserData(UserData)) {
            Object.entries(UserData).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                var input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
loadLocalStorage();
function handleInput(_a) {
    var target = _a.target;
    if (target instanceof HTMLInputElement) {
        if (isUserData(target)) {
            window.UserData[target.id] = target.value;
            localStorage.setItem("UserData", JSON.stringify(window.UserData));
        }
    }
}
var form = document.querySelector("#form");
form === null || form === void 0 ? void 0 : form.addEventListener("keyup", handleInput);
