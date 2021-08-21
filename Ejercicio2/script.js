let turno = 0;
const tablero = [];

const btnPulsado = (e, pos) => {

    const btn = e.target;
    if (btn.innerText == "") {
        turno++;
        const texto = turno % 2 ? "X" : "O";
        const color = turno % 2 ? "blue" : "black";
        btn.innerText = texto;
        btn.style.color = color;
        tablero[pos] = texto;
        if (haGanado()) {
            setTimeout(function() {
                alert("Felicidades " + texto + " ha ganado");
                window.location = "./index.html";
            }, 500);

        }
        if (turno === 8) {
            setTimeout(function() {
                alert("Empate juega de nuevo");
                window.location = "./index.html";
            }, 500);
        }
    } else {
        alert("botón seleccionado, elije uno vacío");
    }
}

const haGanado = () => {
    if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
        return true;
    } else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]) {
        return true;
    } else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]) {
        return true;
    } else if (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]) {
        return true;
    } else if (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]) {
        return true;
    } else if (tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]) {
        return true;
    } else if (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]) {
        return true;
    } else if (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]) {
        return true;
    } else {
        return false;
    }
}

document.querySelectorAll('button').forEach(
    (obj, i) => obj.addEventListener('click', (e) => btnPulsado(e, i)));