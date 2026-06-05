const datita = window.document.createElement("meta")
datita.setAttribute("property", "og:title");
datita.setAttribute("content", "mi sitio de datos falopa")

window.document.head.appendChild(datita)

const btn = document.createElement("button");
btn.innerText = "hacer click para girar la ruleta";
btn.addEventListener("click", () => {
    console.log("gira la ruleta");
    console.log("lo sentimos, perdiste toda tu platusky");
})
document.body.appendChild(btn);
