let hora = document.querySelector("#txtTime");

function getHours() {
  const options = {
    timeZone: "America/Fortaleza",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const date = new Intl.DateTimeFormat([], options);
  hora.innerText = date.format(new Date());
}

setInterval(() => {
  getHours();
}, 1000);
