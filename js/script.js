const main_content = document.getElementById("main_content");
const sidebar_content = document.getElementById("sidebar_content");

let section_activ = "water_animation"

const render = (section, action = true) => {
    main_content.childNodes.forEach( v => {
        if( v.id == section ) {
            action ? v.classList.add("section_active") : v.classList.remove("section_active");
        }
    })
}

const btnView = (section) => {
    render(section_activ, false);
    render(section);
    section_activ = section;
}

const sidebarMenu = () => {
    let allButton = "";

    main_content.childNodes.forEach( child => {
        if (child.nodeName == "SECTION") {
            const name = child.attributes.name.nodeValue;
            const id = child.id
            const button = `<button onclick="btnView('${id}')">${name}</button>`
            allButton = allButton + button;
        }
    })
    sidebar_content.innerHTML = allButton;

}

window.onload = function () {
    let myQuery = (window.location.search).substr(6)
    myQuery.length >= 1 ? section_activ = myQuery: null;

    sidebarMenu();

    setTimeout(() => {
        render(section_activ);
    }, 100);
}