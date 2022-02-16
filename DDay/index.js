const clockTitle = document.querySelector(".js-clock");

function getclock() {
  const Today = new Date();
  const XMas = new Date("2022-12-25 00:00:00");
  const DDay = XMas.getTime() - Today.getTime();

  const DDate = String(Math.floor(DDay / (1000 * 60 * 60 * 24)));
  const DHours = String(Math.floor((DDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
  const DMinutes = String(Math.floor((DDay % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
  const DSeconds = String(Math.floor((DDay % (1000 * 60)) / 1000)).padStart(2,"0");
  clockTitle.innerText = `${DDate}d ${DHours}h ${DMinutes}m ${DSeconds}s`;
}

getclock();
setInterval(getclock, 1000);