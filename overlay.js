setInterval(() => {
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

  var date = new Date();
  var day = date.getDate();

  if (day < 10) day = "0" + day;

  var month = date.getMonth();
  var year = date.getFullYear();
  var hours = date.getHours();

  if (hours < 10) hours = "0" + hours;

  var minutes = date.getMinutes();

  if (minutes < 10) minutes = "0" + minutes;

  var seconds = date.getSeconds();

  if (seconds < 10) seconds = "0" + seconds;

  document.getElementById('clock').innerHTML = `${day} ${months[month]} ${year} ${hours}:${minutes}:${seconds}`;
}, 1000);

window.addEventListener('onWidgetLoad', function (obj) {
  const { fieldData } = obj.detail;
  if (fieldData.logoPosition == "l")
    document.getElementById("info-plate").className = document.getElementById("info-plate").className.replace('rounded-l', 'rounded-r');
});