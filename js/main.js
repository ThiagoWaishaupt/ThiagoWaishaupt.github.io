const card = document.querySelector(".card");
const view = document.querySelector(".view");
const close = document.querySelector(".close");
const picture = document.querySelector(".picture");

function expand() {
    card.classList.remove("preview");
    card.classList.add("expanded");
}

view.addEventListener("click", event => {
    expand();
});

picture.addEventListener("click", event => {
    if (card.classList.contains("preview")) {
        expand();
    }
});

close.addEventListener("click", event => {
    card.classList.remove("expanded");
    card.classList.add("preview");
});

// Added a Codepen thumbnail influencer to make the preview more interesting (See: https://codepen.io/demaine/pen/xNvOzq)
if (location.pathname.match(/fullcpgrid/i)) {
    expand();
}

function mudaTitulo(novoTitulo) {
    let objeto = document.getElementById("idTitulo");
    objeto.innerHTML = novoTitulo;


    switch (novoTitulo) {
        case "Facebook":
            objeto.style.backgroundColor = "#3b5998";
            objeto.style.boxShadow = "0.7em 0 0 #3b5998, -0.2em 0 0 #ffffff";

            break;
        case 'Instagram':
            objeto.style.backgroundColor = "#c32aa3";
            objeto.style.boxShadow = "0.7em 0 0 #c32aa3, -0.2em 0 0 #ffffff";
            break;
        case 'Linkedin':
            objeto.style.backgroundColor = "#0072b1";
            objeto.style.boxShadow = "0.7em 0 0 #0072b1, -0.2em 0 0 #ffffff";
            break;
        case 'GitHub':
            objeto.style.backgroundColor = "#2e2e2e";
            objeto.style.boxShadow = "0.7em 0 0 #2e2e2e, -0.2em 0 0 #ffffff";
            break;
        case 'thiagocais123@hotmail.com':
            objeto.style.backgroundColor = "#0078d7";
            objeto.style.boxShadow = "0.7em 0 0 #0078d7, -0.2em 0 0 #ffffff";
            break;
    }
}

function defaultTitulo() {
    let objeto = document.getElementById("idTitulo");

    objeto.innerHTML = "Thiago Waishaupt";
    objeto.style.backgroundColor = "#5633b1";
    objeto.style.boxShadow = "0.7em 0 0 #5633b1, -0.2em 0 0 #ffffff";

}