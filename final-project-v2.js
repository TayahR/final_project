// SEARCH BAR - searches through the list of positions available to narrow down the options

const liElements = document.getElementsByClassName("position");

function search_position() {
  
const input = document.getElementById("searchbar").value;
const cleanedInput = input.toLowerCase()

    for (let i = 0; i < liElements.length; i++) {
        const liElement = liElements[i];
        if (!liElement.textContent.toLowerCase().includes(cleanedInput)) {
            liElement.style.display = "none";
            console.log({ removed: liElements[i].textContent });
        }
        else {
            liElements[i].style.display="list-item";
        }
    }
}

//SIDE MENU for Mobile - hamburger menu

function sideMenuAppears(){
    document.getElementById('side-menu').classList.add('show-menu');
}

function sideMenuDisappears(){
    document.getElementById('side-menu').classList.remove('show-menu')
}
document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);
document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);




console.log("here")
