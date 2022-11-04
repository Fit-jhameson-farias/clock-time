let hora = document.querySelector("#txtTime");

function getHours() {
  const options = {
    timeZone: "America/Sao_Paulo",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const date = new Intl.DateTimeFormat([], options);
  // // console.log(date.format(new Date()));
  hora.innerText = date.format(new Date());
  // alert();
}

setInterval(() => {
  getHours();
}, 1000);
