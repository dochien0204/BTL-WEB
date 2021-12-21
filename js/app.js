const menuID = document.getElementById("menuID");
const menuCheckbox = document.getElementById("menu_checkbox");
const nav = document.getElementById("navID");
const checkapp = document.querySelectorAll(".checkapp");
function myfunction() {
        menuCheckbox.addEventListener('click', () =>{
            if(menuID.classList.contains("show")) {
                menuID.classList.remove("show");
                nav.classList.remove("nav__active");
            }
            else {
                menuID.classList.add("show");
                nav.classList.add("nav__active");
            }
        })
}
myfunction();
