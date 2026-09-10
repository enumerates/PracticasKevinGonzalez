function normal() {
    document.getElementById("tarjeta").classList.remove("claro");
    document.getElementById("tarjeta").classList.remove("oscuro");
    document.getElementById("tarjeta").classList.add("normal");
}

function claro() {
    document.getElementById("tarjeta").classList.remove("normal");
    document.getElementById("tarjeta").classList.remove("oscuro");
    document.getElementById("tarjeta").classList.add("claro");
}

function oscuro() {
    document.getElementById("tarjeta").classList.remove("normal");
    document.getElementById("tarjeta").classList.remove("claro");
    document.getElementById("tarjeta").classList.add("oscuro");
}