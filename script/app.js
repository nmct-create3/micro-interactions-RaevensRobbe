function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    
    let checktoggle = document.querySelector(`.c-toggle-password__checkbox`);
    let password = document.querySelector(`.c-toggle-password__input`);

    console.log(checktoggle);

    checktoggle.addEventListener(`change`, function() {
        if(checktoggle.checked) {
            password.type = "text";
            console.log("checked")
        } else {
            password.type = "password";
            console.log("unchecked")
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});