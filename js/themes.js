function darkmode() {
  const body = document.body
  const wasDarkmode = localStorage.getItem('dark') == 'true'

  localStorage.setItem('dark', !wasDarkmode)
  body.classList.toggle('dark', !wasDarkmode)
}

document.querySelector('#switchMode').addEventListener('click', darkmode)

function onload() {
  document.body.classList.toggle('dark', localStorage.getItem('dark') == 'true')
}
document.addEventListener('DOMContentLoaded', onload)

document.querySelectorAll("#switchMode").forEach(el => {
  el.onchange = () => localStorage.setItem(el.id, el.checked);
  el.checked = localStorage.getItem(el.id) === "true";
})