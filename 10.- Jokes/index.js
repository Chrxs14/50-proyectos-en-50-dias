const chiste = document.getElementById("chiste");
const boton = document.getElementById("boton");
const URL = `https://icanhazdadjoke.com`;

async function generarChiste() {
  const configHeaderFetch = {
    headers: {
      accept: `application/json`,
    },
  };
  const peticion = await fetch(URL, configHeaderFetch);
  const peticionJSON = await peticion.json();
  chiste.innerText = `${peticionJSON.joke}`;
}

generarChiste();

boton.addEventListener("click", generarChiste);
